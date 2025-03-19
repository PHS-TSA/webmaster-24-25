// @ts-types="@types/hast"
import type { Root } from "hast";
import type { JSX } from "preact";
import { Fragment } from "preact/compat";
import { jsx, jsxDEV, jsxs } from "preact/jsx-runtime";
import rehypeRaw from "rehype-raw";
import rehypeReact, { type Options as RehypeReactOptions } from "rehype-react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

interface MarkdownProps {
  children: string;
}

export function Markdown({ children: markup }: MarkdownProps): JSX.Element {
  const content = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use<[RehypeReactOptions], Root, JSX.Element>(rehypeReact, {
      Fragment: Fragment,
      jsx: jsx,
      jsxs: jsxs,
      jsxDEV: jsxDEV,
      elementAttributeNameCase: "html",
      stylePropertyNameCase: "dom",
    })
    .processSync(markup).result as JSX.Element;

  return <>{content}</>;
}
