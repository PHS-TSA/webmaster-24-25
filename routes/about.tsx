import { type PageResponse, page } from "fresh";
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

export default define.page(() => {
  return (
    <>
      <h1>About</h1>
    </>
  );
});
