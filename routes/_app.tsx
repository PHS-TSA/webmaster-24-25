import type { JSX } from "preact";
import { define } from "../utils.ts";

export default define.page(({ Component }): JSX.Element => {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Off The Griddle</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
