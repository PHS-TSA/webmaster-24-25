import { type PageResponse, page } from "fresh";
import { Info } from "../islands/Info.tsx";
import { define } from "../utils.ts";

export const handler = define.handlers({
  GET(ctx): PageResponse<undefined> {
    ctx.state.meta = {
      title: "Reference Page",
    };

    return page();
  },
});

export default define.page(() => {
  return (
    <main class="prose prose-slate dark:prose-invert w-full p-4">
      <h1 class="!whitespace-normal mx-auto max-w-fit font-semibold text-4xl">
        Reference Page
      </h1>
      <h2>Required Documentation</h2>
      <ul f-client-nav={false}>
        <li>
          <a href="/copyright.pdf"> Student Copyright Checklist</a>
        </li>
        <li>
          <a href="/work-log.pdf">Work Log</a>
        </li>
      </ul>

      <h2>Images</h2>
      <p>
        Logo and Graphics created with{" "}
        <a href="https://www.canva.com/">Canva</a>. All images are from{" "}
        <a href="https://unsplash.com">Unsplash</a>.
        <Info>
          <a href="https://unsplash.com/license">Unsplash license</a>
        </Info>{" "}
        Icons are from <a href="https://tabler.io/icons">Tabler</a>.
        <Info>
          <a href="https://github.com/tabler/tabler-icons/blob/main/LICENSE">
            MIT licensed
          </a>
        </Info>
      </p>

      <h2>Hosting</h2>
      <p>
        This website is hosted using the fantastic{" "}
        <a href="https://deno.com/deploy">Deno Deploy</a>.
      </p>

      <h2>Sources & Inspiration</h2>
      <p>
        <ul>
          <li>
            <a href="https://www.loveandlemons.com/vegan-breakfast-recipes/">
              30 Vegan Breakfast Recipes - Love and Lemons
            </a>
          </li>
          <li>
            <a href="https://makeitdairyfree.com/vegan-egg-substitutes/">
              Vegan Egg Replacement - Make It Dairy Free
            </a>
          </li>
          <li>
            <a href="https://chloeting.com/recipes/vegan-breakfast-plate">
              Vegan Breakfast Plate - Chloe Ting Recipes
            </a>
          </li>
          <li>
            <a href="https://farmtopeople.com/?srsltid=AfmBOor3slTfFbMsThxrEjJZu4kxlIgms6exFH7YKnMdr32WvnlucUK6">
              Farm to People
            </a>
          </li>
          <li>
            <a href="https://www.peiwei.com/info/who-we-are/">
              About Pei Wei: Our Brand Story and Values
            </a>
          </li>
          <li>
            <a href="https://www.livinglarder.co.uk/">Living Larder</a>
          </li>
          <li>
            <a href="https://farmstotable.com/">Farms To Table</a>
          </li>
          <li>
            <a href="https://www.chick-fil-a.com/about">
              About | It’s Our Pleasure To Serve You | Chick-fil-A
            </a>
          </li>
          <li>
            <a href="https://foodserviceindia.com/restaurant-sustainability-practices/">
              8 Restaurant Sustainability Practices: Detailed Guide
            </a>
          </li>
        </ul>
      </p>
    </main>
  );
});
