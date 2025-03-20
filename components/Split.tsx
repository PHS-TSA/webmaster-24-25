import type { ComponentChildren, JSX } from "preact";
import { Image } from "../islands/Image.tsx";

interface SplitProps {
  left: ComponentChildren;
  right: ComponentChildren;
}

export function Split({ left, right }: SplitProps): JSX.Element {
  return (
    <div class="flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-green-400 md:max-h-72 md:flex-row dark:bg-green-700">
      <div class="w-full md:w-7/12">{left}</div>

      <div class="w-full md:w-5/12">{right}</div>
    </div>
  );
}

interface SplitTextItemProps {
  children: ComponentChildren;
}

export function SplitTextItem({ children }: SplitTextItemProps): JSX.Element {
  return (
    <div class="prose prose-slate dark:prose-invert place-items-center p-8 text-lg [&_h2]:text-center">
      {children}
    </div>
  );
}

export interface SplitImageItemProps {
  id: string;
}

export function SplitImageItem(props: SplitImageItemProps): JSX.Element {
  return <Image class="h-72 w-full object-cover" description="" {...props} />;
}
