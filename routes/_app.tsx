import type { PageProps } from "fresh";
import type { JSX } from "preact";

export default function App({ Component }: PageProps): JSX.Element {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>webmaster-24-25</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
