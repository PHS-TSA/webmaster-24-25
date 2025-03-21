import type { JSX } from "preact";

export function Loading(): JSX.Element {
  return (
    <div class="grid w-24 place-items-center">
      <div class="loader" />
    </div>
  );
}
