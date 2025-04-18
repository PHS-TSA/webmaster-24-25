import clsx from "clsx";
import { type PageResponse, page } from "fresh";
import type { VNode } from "preact";
import { SplitImageItem } from "../components/Split.tsx";
import { define } from "../utils.ts";

export const handler = define.handlers({
  GET(ctx): PageResponse<undefined> {
    ctx.state.meta = {
      title: "Menu",
      description: "Explore our delicious menu of vegan dishes",
    };

    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <main class="w-full p-4">
      <h1 class="mx-auto max-w-fit font-semibold text-4xl">Menu</h1>

      <div class="flex flex-col items-center gap-4 py-4 md:gap-8 md:p-8">
        <h2 class="bars mt-6 mb-4 w-2/5 max-w-80 font-semibold text-3xl">
          Griddlelicous
        </h2>

        <MenuItem
          price="$14.99"
          name="Poppy Seed Pancakes"
          description="Delicious gluten free pancakes filled with poppy seeds and oats. Topped with a berry chia jam."
          side="left"
        >
          <SplitImageItem id="pancakes_eaikhb" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Power Waffles"
          description="Hearty waffles made with almonds, oats, applesauce, and sesame seeds. Topped with mixed berries and syrup."
          side="left"
        >
          <SplitImageItem id="power-waffles_tbguqi" />
        </MenuItem>

        <MenuItem
          price="$13.99"
          name="Spelt-Rice Crepes"
          description="Thin rice based crepes filled with wild herbs and homemade cashew parmesan cheese."
          side="right"
        >
          <SplitImageItem id="crepe_l1oyal" />
        </MenuItem>

        <MenuItem
          price="$15.99"
          name="Breakfast Burgers"
          description="There's never a bad time for burgers! Millet and kidney bean based patties topped with tofu, served on a whole grain bun."
          side="right"
        >
          <SplitImageItem id="burger_glltty" />
        </MenuItem>

        <MenuItem
          price="$13.99"
          name="Tofu Omelet"
          description="Who needs eggs for omelets when you have tofu? Our tofu omelets are stuffed with slowly roasted tomatoes for a scrumptious, healthy meal."
          side="left"
        >
          <SplitImageItem id="tofu-omlet_wr1v3o" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Tofu Scramble"
          description="Sleek and delicious tofu garnished with the finest chives and served with rye bread."
          side="left"
        >
          <SplitImageItem id="tofu-scramble_v0bdlo" />
        </MenuItem>

        <h2 class="bars mt-6 mb-4 w-2/5 max-w-80 font-semibold text-3xl">
          The Sweet Side
        </h2>

        <MenuItem
          price="$5.99"
          name="Carrot Cupcakes"
          description="Satisfy your morning sweet tooth with sugary carrot cupcakes topped with a lemon coconut frosting."
          side="right"
        >
          <SplitImageItem id="Screenshot_2025-03-16_182932_tjxcfb" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Glazed Baked Donuts"
          description="Raised glazed donuts with a chocolate glaze topped with hazelnuts and pistachios."
          side="right"
        >
          <SplitImageItem id="donuts_tkngls" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Lemon Muffins"
          description="Lemon muffins filled with chia seeds and coconut. A great way to start your day!"
          side="left"
        >
          <SplitImageItem id="lemon-muffins_abze12" />
        </MenuItem>

        <MenuItem
          price="$6.99"
          name="Cheesecake Tartlets"
          description="An almond and coconut base topped with a lemon, cashew, and strawberry filling."
          side="left"
        >
          <SplitImageItem id="cheesecake_chwih0" />
        </MenuItem>

        <h2 class="bars mt-6 mb-4 w-2/5 max-w-80 font-semibold text-3xl">
          Bowls
        </h2>

        <MenuItem
          price="$9.99"
          name="Fruit Salad"
          description="Kiwis, bananas, grapefruit, strawberries, pineapple, blueberries, and raspberries—oh my! Served with a delightful coconut pudding."
          side="right"
        >
          <SplitImageItem id="fruit-salad_ql0evv" />
        </MenuItem>

        <MenuItem
          price="$10.99"
          name="Millet Quinoa Porridge"
          description="If only Goldilocks tried this porridge first—its blend of millet, quinoa, cinnamon, and fresh fruit would have been just right!"
          side="right"
        >
          <SplitImageItem id="goldy-locks_vfebdo" />
        </MenuItem>

        <MenuItem
          price="$11.99"
          name="Green Smoothie Bowl"
          description="Banana, mango, kiwi, pineapple, and spinach, all blended together and topped with raspberries and chia seeds."
          side="left"
        >
          <SplitImageItem id="gree-smoothie-bowl_u81ygq" nofocus />
        </MenuItem>

        <MenuItem
          price="$11.99"
          name="Berry Smoothie Bowl"
          description="Our mix of banana, raspberries, blackberries, cranberries, spinach, and oats makes for a berry delicious breakfast."
          side="right"
        >
          <SplitImageItem id="berry-smoothie-bowl_nqhu58" />
        </MenuItem>

        <MenuItem
          price="$10.99"
          name="Miso Oatmeal"
          description="Oats, peas, soy sauce, and white miso cooked together to make one tasty meal."
          side="right"
        >
          <SplitImageItem id="miso-oatmeal_omvifw" />
        </MenuItem>

        <h2 class="bars mt-6 mb-4 w-2/5 max-w-80 font-semibold text-3xl">
          House Specials
        </h2>

        <MenuItem
          price="$13.99"
          name="Breakfast Burrito"
          description="Whole wheat tortillas stuffed with tomatoes, avocados, oats, and chickpeas topped with mushrooms."
          side="left"
        >
          <SplitImageItem id="el-burrito_nha531" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Hash Brown BLTs"
          description="Tempeh bacon, romaine lettuce, and tomato between a sturdy hash brown bun."
          side="right"
        >
          <SplitImageItem id="vegan-blt_vycu46" />
        </MenuItem>

        <MenuItem
          price="$16.99"
          name="The Queens Breakfast"
          description="Experience the life of English royalty with a full English breakfast of baked beans, mushrooms, vegan sausage, tempeh bacon, baby spinach, grilled tomatoes, and chia toast."
          side="left"
        >
          <SplitImageItem id="english-people-__xkcc6j" />
        </MenuItem>

        <h2 class="bars mt-6 mb-4 w-2/5 max-w-80 font-semibold text-3xl">
          Relaxing Refreshments
        </h2>

        <MenuItem
          price="$3.99"
          name="Ginger Tea"
          description="Warm, fragrant ginger tea with a hint of lemon."
          side="left"
        >
          <SplitImageItem id="ginger_johpgj" nofocus />
        </MenuItem>

        <MenuItem
          price="$5.99"
          name="Matcha Latte"
          description="Creamy oat milk blended with premium ceremonial-grade matcha."
          side="right"
        >
          <SplitImageItem id="macha-latte_sqxq3z" nofocus />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Chai Latte"
          description="A warming blend of aromatic spices and black tea, perfectly balanced with creamy oat milk and a touch of agave sweetness."
          side="left"
        >
          <SplitImageItem id="chai-latte_vdtjr9" nofocus />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Frothy Banana Coffee"
          description="Our signature fair-trade coffee blended with caramelized banana and topped with a cloud of velvety coconut foam—breakfast and coffee in one delicious cup!"
          side="right"
        >
          <SplitImageItem id="banana-coffee_oyh1hc" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Avocado Super Smoothie"
          description="Creamy avocado blended with spinach, banana, and almond milk for a nutrient-packed green dream that’ll keep you powered up all day."
          side="left"
        >
          <SplitImageItem id="avocado-smoothie_dr92i2" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Buttermilk Shake"
          description="Our cultured cashew buttermilk blended with maple syrup and vanilla bean creates a sweet shake that’s nostalgic for those nights in lodge."
          side="right"
        >
          <SplitImageItem id="buttermilk-shake_lc6twv" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Strawberry Chia Smoothie"
          description="Fresh strawberries and banana whirled with coconut yogurt and chia seeds—it’s like summer in a glass with a satisfying dose of superfood."
          side="left"
        >
          <SplitImageItem id="strawberry-chia-smoothie_qpknnz" />
        </MenuItem>
      </div>
    </main>
  );
});

interface MenuItemProps {
  name: string;
  description: string;
  price: `$${number}`;

  side: "left" | "right";

  /** An instance of {@linkcode SplitImageItem}. */
  children: VNode;
}

function MenuItem({ name, description, children, price, side }: MenuItemProps) {
  return (
    <div class="grid w-full max-w-6xl grid-cols-1 items-center gap-4 overflow-hidden rounded-2xl bg-green-400 shadow-lg md:grid-cols-12 dark:bg-green-700">
      <div
        class={clsx(
          "w-full md:col-span-7",
          side === "right" && "md:order-last",
        )}
      >
        {children}
      </div>

      <div class="w-full p-4 text-lg md:col-span-5">
        <h3 class="text-xl">{name}</h3>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
