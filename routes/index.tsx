import { type PageResponse, page } from "fresh";
import { CoverImage } from "../islands/images/CoverImage.tsx";
import { define } from "../utils.ts";

export const handler = define.handlers({
  GET(ctx): PageResponse<undefined> {
    ctx.state.meta = {
      title: "Some Clever Name",
      description: "Some clever description",
    };

    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <>
      <header class="flex gap-5 p-10">
        <span class="font-extrabold text-2xl">Off The Griddle</span>
        <span class="flex-grow" />
        <nav class="flex flex-row gap-5">
          <a href="/lorem">Lorem</a>
          <a href="/ipsum">Ipsum</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
        </nav>
      </header>
      <div>
        <CoverImage />
      </div>
    </>
  );
});
