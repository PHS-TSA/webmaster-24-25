import { type PageResponse, page } from "fresh";
import { Split, SplitImageItem, SplitTextItem } from "../components/Split.tsx";
import { Image } from "../islands/Image.tsx";
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
    <div>
      <div class="relative h-[65svh] overflow-hidden md:h-[75svh] lg:h-svh">
        <span class="absolute z-10 max-w-64 px-14 py-8 font-black text-4xl text-white [text-shadow:2px_2px_#00000080] sm:max-w-sm sm:p-14 sm:text-6xl md:max-w-lg md:p-20 md:text-8xl lg:max-w-4xl lg:p-32 lg:text-9xl">
          {siteName}
        </span>
        <Image
          class="h-full w-full object-cover"
          id="background-griddle_exps2q"
          description=""
        />
        <div class="pointer-events-none absolute inset-0 bg-black bg-opacity-10" />
      </div>

      <main class="flex w-full flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
        <Split
          left={<SplitImageItem id="where-are-we_fylokf" />}
          right={
            <SplitTextItem>
              <h2>Where are we?</h2>

              <p>
                {siteName} is located in <mark> downtown St. Louis</mark> on{" "}
                <mark>Chouteau Avenue</mark>, right down the street from the
                Saint Louis Arch.
                <br />
                We’re open from 7am–2pm every day.
              </p>
            </SplitTextItem>
          }
        />

        <Split
          left={
            <SplitTextItem>
              <h2>What we serve</h2>
              <p>
                We serve the best vegan breakfast in the state of Missouri!
                Whether you’re looking for something healthy or you want to
                indulge in some delicious pancakes, we have what you’re looking
                for. Check out{" "}
                <a class="underline" href="/menu">
                  our menu
                </a>{" "}
                to get hungry!
              </p>
            </SplitTextItem>
          }
          right={<SplitImageItem id="what-we-serve_r9qi3z" />}
        />

        <Split
          left={<SplitImageItem id="78189594352bb2037d16f73112455128_co5t4c" />}
          right={
            <SplitTextItem>
              <h2>What sets us apart</h2>
              <p>
                Our ingreditents are all locally grown and top-of-the-line
                quality!
                <br />
                As a family-owned business, our chefs{" "}
                <a href="/process"> prepare your food</a> with love.
              </p>
            </SplitTextItem>
          }
        />

        <Split
          left={
            <SplitTextItem>
              <h2>Our Commitment to Sustainability</h2>
              <p>
                As a{" "}
                <a href="/sustainability">
                  company dedicated to sustainability
                </a>
                , we’re 100% powered by green energy (and therefore carbon
                neutral). We also compost all of our food waste and use electric
                stoves to reduce our impact on the environment.
              </p>
            </SplitTextItem>
          }
          right={
            <SplitImageItem id="Teds-Montana-Grill-Headquarters-Solar-Panels_rk6ddo" />
          }
        />
      </main>
    </div>
  );
});
