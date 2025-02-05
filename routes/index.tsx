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
      <img
        class="w-screen"
        src="/images/farm.png"
        alt="Farmer goes farming in tractor on farm."
      />
    </>
  );
});
