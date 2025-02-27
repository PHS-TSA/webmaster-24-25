import { CoverImage } from "../islands/images/CoverImage.tsx";
import { define } from "../utils.ts";

export default define.page(() => {
  return (
    <>
      <header class="flex gap-5 p-10">
        <span class="">Off The Griddle</span>
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
