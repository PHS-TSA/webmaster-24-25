import type { JSX } from "preact";
import { useImage } from "../../utils/cloudinary.ts";
import { Image } from "../Image.tsx";

export function CoverImage(): JSX.Element {
  const coverImage = useImage("78189594352bb2037d16f73112455128_co5t4c");

  return (
    <Image
      class="w-screen"
      src={coverImage}
      alt="Farmer goes farming in tractor on farm."
      accessible={true}
    />
  );
}
