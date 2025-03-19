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
    <main class="p-4">
      <h1>About</h1>
      <h2>It’s all about you</h2>
      <p>
        Here at Off The Griddle, our customers are always our number one
        priority. You make our mission possible and we can not thank you enough
        for that. Without your valued support, we wouldn’t be able to serve our
        delicious food nor our shared community.
      </p>

      <h2>Our Story</h2>
      <p>
        We were founded in 2016 by Elisha Dukes after he noticed a lack of tasty
        vegan options in the St. Louis area. Growing up, Elisha lived in a vegan
        household and knew how good vegan food could be. However, many people
        around him believed vegan food was inherently bad, so Elisha founded Off
        The Griddle to share his family recipes—and cook delicious food.
      </p>
      <h2>Our Service</h2>
      <p>
        Not only do we aim to serve customers, we aim to serve our community. At
        the end of the day, all of the leftovers we have are taken to our local
        homeless shelter to help feed those in need. After all, there’s never a
        reason to waste food that could help feed someone. We also donate 10% of
        all of our profits to local charities such as Barnes-Jewish Children's
        Hospital and the St. Louis division of the Red Cross. Our goal isn’t
        profits, it’s change.
      </p>
      <p>
        Supporting our restaurant supports our mission but there’s a much easier
        way to contribute. Be nice and supportive to those around you! It may
        seem simple but just being supportive of those around you, even
        strangers, will help make a positive difference.
      </p>
    </main>
  );
});
