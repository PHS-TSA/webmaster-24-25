import { Partial, asset } from "fresh/runtime";
import type { JSX } from "preact";
import { define } from "../utils.ts";
import {
  appleTouchIconPngUrl,
  faviconIcoUrl,
  keywords,
  logoSvgUrl,
  makeTitle,
} from "../utils/site.ts";

/**
 * The global meta tags.
 */
const metas = (
  <>
    <link rel="icon" href={faviconIcoUrl} sizes="48x48" />
    <link rel="icon" href={logoSvgUrl} sizes="any" type="image/svg+xml" />
    <link rel="apple-touch-icon" href={appleTouchIconPngUrl} />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#005" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta
      name="theme-color"
      media="(prefers-color-scheme: light)"
      content="#22C55E"
    />
    <meta
      name="theme-color"
      media="(prefers-color-scheme: dark)"
      content="#15803D"
    />
    <meta name="geo.region" content="US-MO" />
    <meta
      name="geo.placename"
      content="Maryland Heights, Missouri, United States"
    />
    <meta name="geo.position" content="38.7413922,-90.456632" />
    <meta name="ICBM" content="38.7413922,-90.456632" />
    <meta name="keywords" content={keywords.join(", ")} />
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  </>
);

export default define.page(({ Component, state }): JSX.Element => {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href={asset("/styles.css")} rel="preload" as="style" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <title>
          {state.meta?.title ? makeTitle(state.meta.title) : "Off The Griddle"}
        </title>
        {state.meta?.hidden && <meta name="robots" content="noindex" />}
        {state.meta?.description && (
          <meta name="description" content={state.meta.description} />
        )}
        <link rel="manifest" href="/manifest.webmanifest" />
        {metas}
        <link rel="stylesheet" href={asset("/styles.css")} />
      </head>
      <body
        class="bg-white text-slate-950 dark:bg-black dark:text-slate-50"
        f-client-nav={true}
      >
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
});
