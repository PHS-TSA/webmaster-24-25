import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IconMessageChatbot } from "@tabler/icons-preact";
import { clsx } from "clsx";
import { IS_BROWSER } from "fresh/runtime";
import { Fragment, type JSX } from "preact";
import { Suspense, lazy } from "preact/compat";
import {
  floatingButtonStyles,
  greenButtonStyles,
} from "../components/styles.ts";

const ChatbotBox = lazy(
  async () => await import("./ChatbotBox.tsx").then((m) => m.ChatbotBox),
);

export function Chatbot(): JSX.Element {
  const icon = <IconMessageChatbot class="size-8" />;
  const buttonStyles = clsx(floatingButtonStyles, greenButtonStyles);

  if (!IS_BROWSER) {
    return (
      <button type="button" class={buttonStyles}>
        {icon}
      </button>
    );
  }

  return (
    <Popover>
      <PopoverButton className={buttonStyles} aria-label="Meet our Chatbot!">
        {icon}
      </PopoverButton>
      <PopoverPanel
        transition
        className="transition ease-out data-[closed]:opacity-0 data-[enter]:duration-75 data-[leave]:duration-150"
      >
        <Suspense fallback={<Fragment />}>
          <ChatbotBox class="absolute right-0 bottom-20 shadow-2xl" />
        </Suspense>
      </PopoverPanel>
    </Popover>
  );
}
