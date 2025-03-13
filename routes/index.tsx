import { type PageResponse, page } from "fresh";
import { CoverImage } from "../islands/images/CoverImage.tsx";
import { define } from "../utils.ts";
import { siteName } from "../utils/site.ts";

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
    <main>
      <div class="relative">
        <span class="absolute z-10 max-w-64 px-14 py-8 font-black text-4xl text-white sm:max-w-sm sm:p-14 sm:text-6xl md:max-w-lg md:p-20 md:text-8xl lg:max-w-4xl lg:p-32 lg:text-9xl">
          {siteName}
        </span>
        <CoverImage />
        <div class="pointer-events-none absolute inset-0 bg-black bg-opacity-10" />
      </div>
    </main>
  );
});
