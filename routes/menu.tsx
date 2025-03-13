import { type PageResponse, page } from "fresh";
import type { VNode } from "preact";
import {
  MenuImage,
  type MenuImageProps,
} from "../islands/images/MenuImage.tsx";
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

      <div class="flex flex-col items-center gap-4 p-4">
        <MenuItem
          price="$14.99"
          name="Dish Name"
          description="Our menu is 100% vegan"
          side="left"
        >
          <MenuImage image="what-we-serve_r9qi3z" description="Yum!" />
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

  /** An instance of {@linkcode MenuImage}. */
  children: VNode<MenuImageProps>;
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
