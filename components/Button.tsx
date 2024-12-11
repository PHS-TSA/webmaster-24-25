import type { ComponentChildren, JSX } from "preact";

export interface ButtonProps {
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      class="rounded border-2 border-gray-500 bg-white px-2 py-1 transition-colors hover:bg-gray-200"
    />
  );
}
