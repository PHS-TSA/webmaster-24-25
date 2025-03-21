import { Image } from "../islands/Image.tsx";
import { define } from "../utils.ts";

export default define.page(() => {
  return (
    <main class="w-full p-4">
      <h1 class="mx-auto max-w-fit font-semibold text-4xl">Process</h1>

      <div class="timeline">
        <div class="timeline-container timeline-left">
          <h2>Locally Sourced Ingredients, Farm Fresh</h2>
          <p>
            We have partnered with multiple family-owned Missouri farms to
            source our ingredients. This allows us to ensure no animals are
            harmed in the process and that our partners follow sustainable
            practices. By partnering with farms like this, we can deliver high
            quality food and promote sustainable practices. For example, our
            Tempeh Bacon is sourced from Living Larder, a local, family-owned
            farm with the Soil Association organic certification.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="farm-fresh_zmxphe"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-right">
          <h2>Cooking Process: Organic Only</h2>
          <p>
            After our ingredients are sourced, we make sure they’re cooked in a
            fresh, sustainable way. To do this, we order fresh ingredients
            weekly to eliminate the need for preservatives. We also use
            specialized cooking methods such as fermenting to provide delectable
            flavors without sacrificing our organic ingredients.
          </p>
        </div>
        <div class="timeline-alt timeline-left md:h-1/2">
          <Image
            id="cooking-process_h7pgbm"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-left">
          <h2>Seasonal Menu—Fresh Year Round</h2>
          <p>
            Throughout the year, our menu changes to reflect the current growing
            seasons. For example, we feature dishes with watermelon in the
            summer, as it’s in season. In the winter, we feature dishes like
            brussel sprouts that thrive in cold temperatures. This helps us
            ensure that everything served is fresh and organic.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="seasonal-menu_khgkwu"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>
      </div>
    </main>
  );
});
