import type { JSX } from "preact";
import { useImage } from "../utils/cloudinary.ts";
import { description } from "../utils/site.ts";
import { CloudImage } from "./CloudImage.tsx";

export interface MenuImageProps {
  id: string;

  class: string;

  description: string;
}

export function Image({ id, class: className }: MenuImageProps): JSX.Element {
  const image = useImage(id);

  return <CloudImage class={className} src={image} alt={description} />;
}
