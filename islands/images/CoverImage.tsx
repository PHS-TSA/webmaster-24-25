import type { JSX } from "preact";
import { image } from "../../utils/cloudinary.ts";
import { Image } from "../Image.tsx";

const coverImage = image("78189594352bb2037d16f73112455128_co5t4c");

export function CoverImage(): JSX.Element {
  return (
    <Image
      class="w-screen"
      src={coverImage}
      alt="Farmer goes farming in tractor on farm."
      accessible={true}
    />
  );
}
