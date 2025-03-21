import { Button, Fieldset, Input, Label } from "@headlessui/react";
import { useSignal, useSignalEffect } from "@preact/signals";
import { IconReload, IconSend } from "@tabler/icons-preact";
import { clsx } from "clsx";
import { IS_BROWSER } from "fresh/runtime";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Loading } from "../components/Loading.tsx";
import { chat } from "../sdk/chat/index.ts";
import { getThreadId } from "../sdk/chat/thread.ts";
import { setIndexedDb, useIndexedDb } from "../utils/hooks/indexeddb.ts";
import { formatRefs } from "../utils/openai/references.ts";
import type { Message } from "../utils/openai/schemas.ts";
import { tw } from "../utils/tags.ts";
import { Markdown } from "./Markdown.tsx";

const replyStyles = tw`prose prose-sm prose-slate rounded-lg max-w-60 bg-slate-300 p-4 dark:prose-invert dark:bg-slate-800`;

function getReplySide(role: "assistant" | "user"): string {
  switch (role) {
    case "assistant":
      return tw`mr-auto text-start`;

    case "user":
      return tw`ml-auto text-end`;
  }
}

type DbItem = { role: "assistant" | "user"; message: string };
type Db = DbItem[];

export function ChatbotBox(
  props: JSX.HTMLAttributes<HTMLDivElement>,
): JSX.Element {
  const messageValue = useSignal("");
  const isAsking = useSignal(false);

  const thread_ = useIndexedDb("thread", getThreadId);
  const threadId = useSignal(thread_);
  useSignalEffect(() => {
    (async () => {
      await setIndexedDb("thread", threadId.value);
    })();
  });

  const messages_ = useIndexedDb<Db>(
    "messages",
    // deno-lint-ignore require-await
    async () => [],
  );
  const messages = useSignal(messages_ ?? []);
  useSignalEffect(() => {
    (async () => {
      await setIndexedDb("messages", messages.value);
    })();
  });

  const scrollRef = useRef<HTMLUListElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: It depends on it indirectly.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9999999 });
  }, [messages.value]);

  return (
    <div
      {...props}
      class={clsx(
        "grid h-96 w-[90vw] grid-flow-row auto-rows-min grid-rows-message-box rounded-lg bg-green-400 p-5 sm:w-80 dark:bg-green-800",
        props.class,
      )}
    >
      <div class="h-8 font-medium text-lg">
        ChefBot
        <div
          class="-right-1 -top-2 relative inline-block size-2 rounded-full bg-green-500 ring-1 ring-slate-50 dark:ring-slate-950"
          title="Online!"
        />
        <Button
          class="float-end"
          title="Restart your conversation."
          onClick={async () => {
            threadId.value = await getThreadId();
            messages.value = [];
          }}
        >
          <IconReload />
        </Button>
      </div>
      <ul ref={scrollRef} class="flex flex-col-reverse gap-4 overflow-y-auto">
        {isAsking.value && (
          <li class={replyStyles}>
            <Loading />
          </li>
        )}{" "}
        {messages.value.map((msg) => (
          <li
            key={`${msg.role}${msg.message}`}
            class={clsx(getReplySide(msg.role), replyStyles)}
          >
            <Markdown>{msg.message}</Markdown>
          </li>
        ))}
      </ul>

      <form
        class="place-items-center py-2"
        onSubmit={async (e) => {
          e.preventDefault();

          if (threadId.value === undefined) {
            throw new Error("Why didn't we Suspend-se before now?");
          }

          const message = messageValue.value;
          if (message === "") {
            // If there's no message, don't do anything.
            return;
          }
          messageValue.value = "";
          isAsking.value = true;
          messages.value = [{ role: "user", message }, ...messages.value];

          const reply = await chat(threadId.value, message);

          if (reply === undefined) {
            // Don't crash when offline.
            return;
          }

          messages.value = await Promise.all(
            reply.map(
              async (val: Message): Promise<DbItem> => ({
                role: val.role,
                message: await formatRefs(val),
              }),
            ),
          );

          isAsking.value = false;
        }}
      >
        <Fieldset disabled={!IS_BROWSER} class="relative">
          <Label>Ask A Question, Any Question!</Label>
          <Input
            value={messageValue.value}
            autoComplete="off"
            className="h-10 w-full whitespace-normal rounded-lg pr-10 shadow-sm dark:text-slate-950"
            onInput={(e: JSX.TargetedInputEvent<HTMLInputElement>) => {
              messageValue.value = (e.target as HTMLInputElement).value;
            }}
          />
          <Button
            className="absolute right-2 p-2"
            type="submit"
            title="Send your message."
          >
            <IconSend class="dark:text-slate-950" />
          </Button>
        </Fieldset>
      </form>
    </div>
  );
}
