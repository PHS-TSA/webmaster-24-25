import type { JSX } from "preact";
import { Image } from "../islands/Image.tsx";

export interface MenuImageProps {
  id: string;

  description: string;
}

export function MenuImage(props: MenuImageProps): JSX.Element {
  return <Image class="h-72 w-full object-cover" {...props} />;
}
