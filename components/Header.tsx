import type { ComponentChildren, JSX } from "preact";
import { siteName } from "../utils/site.ts";

export function Header(): JSX.Element {
  return (
    <header class="flex flex-col gap-5 bg-green-500 px-10 py-5 md:flex-row dark:bg-green-800">
      <a href="/" class="text-pretty font-extrabold text-3xl">
        {siteName}
      </a>

      {/* Force them apart. */}
      <span class="hidden flex-grow md:block" />

      <nav class="flex flex-row flex-wrap gap-3">
        <NavItem href="/sustainability">Sustainability</NavItem>
        <NavItem href="/process">Process</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/menu">Menu</NavItem>
      </nav>
    </header>
  );
}

type NavItemProps = {
  href: string;
  children: ComponentChildren;
};

export function NavItem(props: NavItemProps): JSX.Element {
  return (
    <a
      class="rounded-xl p-1 font-semibold text-lg transition-all hover:underline aria-[current]:underline"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
