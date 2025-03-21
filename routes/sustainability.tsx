import { Image } from "../islands/Image.tsx";
import { define } from "../utils.ts";

export default define.page(() => {
  return (
    <main class="w-full p-4">
      <h1 class="mx-auto max-w-fit font-semibold text-4xl">Sustainability</h1>
      <p class="mb-8 text-center">
        Why should you feel good about eating our food?
      </p>

      <div class="timeline">
        <div class="timeline-container timeline-left">
          <h2>Our Ingredients</h2>
          <p>
            Our ingredients are organic and sourced from local farms. We
            specifically get our ingredients from local farms to reduce the
            carbon emissions that come from transportation.
            <br />
            Vegan food is naturally dairy-free, shellfish-free, and vegetarian,
            and most of our food is also allergen-friendly and kosher.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="ingredients_tcwroq"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-right">
          <h2>Reducing Our Food Waste</h2>
          <p>
            Food waste is something that we try to minimize as much as possible.
            We minimize our food waste in many different ways. The first way we
            minimize food waste is to ask customers and chefs to compost. Next
            to the trash bins are our composting bin where excess food can be
            placed in. This waste will then turn into compost for later use. We
            also know how much a typical customer consumes, with this
            information we proportion our dishes accordingly.
          </p>
        </div>
        <div class="timeline-alt timeline-left">
          <Image
            id="compost-food-waste_b8cwwb"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-left">
          <h2>We Are Powered by Green Energy</h2>
          <p>
            The Sun is a great energy resource which is why our restaurant is
            powered by solar panels.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="green-energy_reokfn"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-right">
          <h2>Energy Efficiency</h2>
          <p>
            To conserve energy we replace our equipment, appliances and lighting
            with more energy efficient options. Instead of gas stoves we use
            electric ones. Our lights are LED and a few are also
            motion-activated to reduce our energy loss. The restaurant has good
            ventilation and exhaust systems to reduce the use of A/C while still
            keeping a good temperature for the customers.
          </p>
        </div>
        <div class="timeline-alt timeline-left">
          <Image
            id="Sustainability-header_ualz4n"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-left">
          <h2>Our packing is sustainable</h2>
          <p>
            Using single-use plastics is bad for the environment as they can
            lead to microplastics and even end up in landfills harming the
            ecosystem and organism. So instead of single use plastics we use
            environmentally friendly, biodegradable packaging to prevent any
            harmful impacts.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="biodegradable_bpddml"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-right">
          <h2>We recycle</h2>
          <p>
            Within our restaurants we include a compost bin, a normal trash bin
            as well as a recycle bin. This allows us as a restaurant to give our
            customers many opportunities to be environmentally friendly.
          </p>
        </div>
        <div class="timeline-alt timeline-left">
          <Image
            id="recycle_sreyep"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>

        <div class="timeline-container timeline-left">
          <h2>Emissions</h2>
          <p>
            Just by being a vegan restaurant we are being more environmentally
            friendly. The meat industry makes up for about 60% of carbon
            emissions.
          </p>
        </div>
        <div class="timeline-alt timeline-right">
          <Image
            id="emmisions_gpmyxm"
            description=""
            class="max-h-64 w-full object-cover max-md:h-64"
          />
        </div>
      </div>
    </main>
  );
});
