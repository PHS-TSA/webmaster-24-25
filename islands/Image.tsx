import type { JSX } from "preact";
import { useImage } from "../utils/cloudinary.ts";
import { description } from "../utils/site.ts";
import { CloudImage } from "./CloudImage.tsx";

export interface MenuImageProps {
  id: string;

  description: string;
}

export function Image({ id }: MenuImageProps): JSX.Element {
  const menuImage = useImage(id);

  return <CloudImage class="w-full" src={menuImage} alt={description} />;
}
