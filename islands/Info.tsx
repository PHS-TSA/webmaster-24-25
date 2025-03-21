import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IconInfoCircle } from "@tabler/icons-preact";
import { clsx } from "clsx";
import { IS_BROWSER } from "fresh/runtime";
import { type ComponentChildren, Fragment, type JSX } from "preact";
import { prettyFocus } from "../components/styles.ts";

export interface InfoProps {
  readonly children: ComponentChildren;
}

export function Info({ children }: InfoProps): JSX.Element {
  if (!IS_BROWSER) {
    return (
      <button
        type="button"
        title="More Information"
        class={clsx(
          "inline-flex size-5 place-items-center rounded-full",
          prettyFocus,
        )}
      >
        <IconInfoCircle class="inline" size={20} />
        <div class="hidden">{children}</div>
      </button>
    );
  }

  return (
    <Popover as={Fragment}>
      <PopoverButton
        title="More Information"
        class={clsx(
          "inline-flex size-5 place-items-center rounded-full",
          prettyFocus,
        )}
      >
        <IconInfoCircle class="inline" size={20} />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        class="prose prose-sm prose-slate prose-invert dark:prose dark:prose-sm absolute top-0 left-0 z-20 w-48 max-w-fit rounded-md border-4 border-slate-950 bg-slate-900/95 p-1 text-sm shadow-2xl [--anchor-gap:4px] dark:border-slate-50 dark:bg-slate-100/95"
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
}
