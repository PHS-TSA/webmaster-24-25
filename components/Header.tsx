import type { JSX } from "preact";

export function Header(): JSX.Element {
  return (
    <header class="flex gap-5 px-10 py-5">
      <a href="/" class="font-extrabold text-2xl">
        Off The Griddle
      </a>

      {/* Force them apart. */}
      <span class="flex-grow" />

      <nav class="flex flex-row gap-5">
        <a class="aria-[current]:underline" href="/about">
          About
        </a>
        <a class="aria-[current]:underline" href="/menu">
          Menu
        </a>
      </nav>
    </header>
  );
}
