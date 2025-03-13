import type { JSX } from "preact";
import { useImage } from "../../utils/cloudinary.ts";
import { description } from "../../utils/site.ts";
import { Image } from "../Image.tsx";

export interface MenuImageProps {
  image: string;

  description: string;
}

export function MenuImage({ image }: MenuImageProps): JSX.Element {
  const menuImage = useImage(image);

  return <Image class="w-full" src={menuImage} alt={description} />;
}
