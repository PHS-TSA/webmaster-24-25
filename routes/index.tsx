import { type PageResponse, page } from "fresh";
import { Header } from "../components/Header.tsx";
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
      <Header />
      <div>
        <CoverImage />
      </div>
    </>
  );
});
