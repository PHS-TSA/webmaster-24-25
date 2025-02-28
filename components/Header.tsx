import type { JSX } from "preact";

export function Header(): JSX.Element {
  return (
    <header class="flex gap-5 p-10">
      <span class="font-extrabold text-2xl">Off The Griddle</span>

      {/* Force them apart. */}
      <span class="flex-grow" />

      <nav class="flex flex-row gap-5">
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
      </nav>
    </header>
  );
}
