import type { JSX } from "preact";
import { type ImageOptions, useImage } from "../utils/cloudinary.ts";
import { CloudImage } from "./CloudImage.tsx";

export interface MenuImageProps extends ImageOptions {
  id: string;
  description: string;

  class?: string;
}

export function Image({
  id,
  description,
  class: className,
  ...imageOptions
}: MenuImageProps): JSX.Element {
  const image = useImage(id, imageOptions);

  return <CloudImage class={className} src={image} alt={description} />;
}
