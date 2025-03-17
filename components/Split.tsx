import type { ComponentChildren, JSX } from "preact";

interface SplitProps {
  left: ComponentChildren;
  right: ComponentChildren;
}

export function Split({ left, right }: SplitProps): JSX.Element {
  return (
    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-green-400 md:flex-row dark:bg-green-700">
      <div class="w-full md:w-7/12">{left}</div>

      <div class="w-full md:w-5/12">{right}</div>
    </div>
  );
}
