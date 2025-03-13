import { clsx } from "clsx";
import type { JSX } from "preact";
import { siteName, slogan } from "../utils/site.ts";

/**
 * Properties for the {@linkcode Footer} component.
 */
export type FooterProps = JSX.HTMLAttributes<HTMLElement>;

/**
 * Render a footer component, which is used as a footer for pages.
 * It contains an about section, a categories section, and a "made with" section.
 * The about section contains the site name and slogan.
 * The categories section contains links to the various pages of the site.
 * The "made with" section contains links to the tools that were used to build the site.
 *
 * @param props - The component's properties.
 * @param props.class - The CSS classes to apply to this component.
 * @returns The rendered footer component.
 */
export function Footer(props: FooterProps): JSX.Element {
  return (
    <footer
      {...props}
      class={clsx(
        "z-40 grid w-full max-w-screen-xlg grid-flow-col grid-cols-footer-mobile grid-rows-footer-mobile gap-x-2 gap-y-16 bg-green-950 p-8 text-sm shadow-2xl sm:grid-rows-footer-desktop sm:gap-x-8 md:grid-cols-footer-desktop md:gap-16 dark:bg-green-950",
        props.class,
      )}
    >
      <div class="col-start-1 col-end-2 row-start-1 row-end-2">
        <Who />
      </div>
    </footer>
  );
}

/**
 * Render the "who" section of the footer.
 * It contains the site name and slogan.
 *
 * @returns The rendered "who" section of the footer.
 */
function Who(): JSX.Element {
  return (
    <>
      <div class="flex flex-row items-center gap-1">
        <div class="font-bold text-slate-50 text-xl sm:text-2xl">
          {siteName}
        </div>
      </div>
      <div class="text-balance text-slate-400 dark:text-slate-400">
        {slogan}
      </div>
    </>
  );
}
