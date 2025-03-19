import { type PageResponse, page } from "fresh";
import type { VNode } from "preact";
import { MenuImage } from "../components/MenuImage.tsx";
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
    <main class="py-4">
      <h1 class="mx-auto max-w-fit font-semibold text-4xl">Menu</h1>

      <h2 class="mx-auto mt-6 mb-4 max-w-fit font-semibold text-3xl">
        Griddlelicous
      </h2>

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$14.99"
          name="Poppy Seed Pancakes"
          description="Delicious gluten free pancakes filled with poppy seeds and oats. Topped with a berry chia jam."
          side="left"
        >
          <MenuImage id="pancakes_eaikhb" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Power Waffles"
          description="Hearty waffles made with almonds, oats, applesauce, and sesame seeds. Topped with mixed berries and syrup."
          side="right"
        >
          <MenuImage id="power-waffles_tbguqi" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$13.99"
          name="Spelt-Rice Crepes"
          description="Thin rice based crepes filled with wild herbs and homemade cashew parmesan cheese."
          side="left"
        >
          <MenuImage id="crepe_l1oyal" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$15.99"
          name="Breakfast Burgers"
          description="There's never a bad time for burgers! Millet and kidney bean based patties topped with tofu, served on a whole grain bun."
          side="right"
        >
          <MenuImage id="burger_glltty" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$13.99"
          name="Tofu Omelet"
          description="Who needs eggs for omelets when you have tofu? Our tofu omelets are stuffed with slowly roasted tomatoes for a scrumptious, healthy meal."
          side="left"
        >
          <MenuImage id="tofu-omlet_wr1v3o" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Tofu Scramble"
          description="Sleek and delicious tofu garnished with the finest chives and served with rye bread."
          side="right"
        >
          <MenuImage id="tofu-scramble_v0bdlo" description="Yum!" />
        </MenuItem>
      </div>

      <h2 class="mx-auto mt-6 mb-4 max-w-fit font-semibold text-3xl">
        The Sweet Side
      </h2>

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$5.99"
          name="Carrot Cupcakes"
          description="Satisfy your morning sweet tooth with sugary carrot cupcakes topped with a lemon coconut frosting."
          side="left"
        >
          <MenuImage
            id="Screenshot_2025-03-16_182932_tjxcfb"
            description="Yum!"
          />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Glazed Baked Donuts"
          description="Raised glazed donuts with a chocolate glaze topped with hazelnuts and pistachios."
          side="right"
        >
          <MenuImage id="donuts_tkngls" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Lemon Muffins"
          description="Lemon muffins filled with chia seeds and coconut. A great way to start your day!"
          side="left"
        >
          <MenuImage id="lemon-muffins_abze12" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$6.99"
          name="Cheesecake Tartlets"
          description="An almond and coconut base topped with a lemon, cashew, and strawberry filling."
          side="right"
        >
          <MenuImage id="cheesecake_chwih0" description="Yum!" />
        </MenuItem>
      </div>

      <h2 class="mx-auto mt-6 mb-4 max-w-fit font-semibold text-3xl">Bowls</h2>

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$9.99"
          name="Fruit Salad"
          description="Kiwis, bananas, grapefruit, strawberries, pineapple, blueberries, and raspberries—oh my! Served with a delightful coconut pudding."
          side="left"
        >
          <MenuImage id="fruit-salad_ql0evv" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$10.99"
          name="Millet Quinoa Porridge"
          description="If only Goldilocks tried this porridge first—its blend of millet, quinoa, cinnamon, and fresh fruit would have been just right!"
          side="right"
        >
          <MenuImage id="goldy-locks_vfebdo" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$11.99"
          name="Green Smoothie Bowl"
          description="Banana, mango, kiwi, pineapple, and spinach, all blended together and topped with raspberries and chia seeds."
          side="left"
        >
          <MenuImage id="gree-smoothie-bowl_u81ygq" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$11.99"
          name="Berry Smoothie Bowl"
          description="Our mix of banana, raspberries, blackberries, cranberries, spinach, and oats makes for a berry delicious breakfast."
          side="right"
        >
          <MenuImage id="berry-smoothie-bowl_nqhu58" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$10.99"
          name="Miso Oatmeal"
          description="Oats, peas, soy sauce, and white miso cooked together to make one tasty meal."
          side="left"
        >
          <MenuImage id="miso-oatmeal_omvifw" description="Yum!" />
        </MenuItem>
      </div>

      <h2 class="mx-auto mt-6 mb-4 max-w-fit font-semibold text-3xl">
        House Specials
      </h2>

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$13.99"
          name="Breakfast Burrito"
          description="Whole wheat tortillas stuffed with tomatoes, avocados, oats, and chickpeas topped with mushrooms."
          side="left"
        >
          <MenuImage id="el-burrito_nha531" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$12.99"
          name="Hash Brown BLTs"
          description="Tempeh bacon, romaine lettuce, and tomato between a sturdy hash brown bun."
          side="right"
        >
          <MenuImage id="vegan-blt_vycu46" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$16.99"
          name="The Queens Breakfast"
          description="Experience the life of English royalty with a full English breakfast of baked beans, mushrooms, vegan sausage, tempeh bacon, baby spinach, grilled tomatoes, and chia toast."
          side="left"
        >
          <MenuImage id="english-people-__xkcc6j" description="Yum!" />
        </MenuItem>
      </div>

      <h2 class="mx-auto mt-6 mb-4 max-w-fit font-semibold text-3xl">
        Relaxing Refreshments
      </h2>

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$3.99"
          name="Ginger Tea"
          description="Warm, fragrant ginger tea with a hint of lemon."
          side="left"
        >
          <MenuImage id="ginger_johpgj" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$5.99"
          name="Matcha Latte"
          description="Creamy oat milk blended with premium ceremonial-grade matcha."
          side="left"
        >
          <MenuImage id="macha-latte_sqxq3z" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Chai Latte"
          description="..."
          side="right"
        >
          <MenuImage id="chai-latte_hygayl" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Frothy Banana Coffee"
          description="..."
          side="right"
        >
          <MenuImage id="banana-coffee_oyh1hc" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Avocado Super Smoothie"
          description="..."
          side="right"
        >
          <MenuImage id="avocado-smoothie_dr92i2" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Buttermilk Shake"
          description="..."
          side="right"
        >
          <MenuImage id="buttermilk-shake_lc6twv" description="Yum!" />
        </MenuItem>

        <MenuItem
          price="$4.99"
          name="Strawberry Chia Smoothie"
          description="..."
          side="right"
        >
          <MenuImage id="strawberry-chia-smoothie_qpknnz" description="Yum!" />
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

  /** An instance of {@linkcode Image}. */
  children: VNode;
}

function MenuItem({ name, description, children, price, side }: MenuItemProps) {
  const child = <div class="w-full md:w-7/12">{children}</div>;

  return (
    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-green-400 md:flex-row dark:bg-green-700">
      {side === "left" && child}

      <div class="w-full place-items-center p-4 text-lg md:w-5/12">
        <h2 class="text-xl">{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>

      {side === "right" && child}
    </div>
  );
}
