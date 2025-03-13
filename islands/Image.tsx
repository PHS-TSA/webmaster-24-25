import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import type { CloudinaryImage } from "@cloudinary/url-gen";
import type { JSX } from "preact";

interface ImageProps extends Omit<JSX.ImgHTMLAttributes, "src"> {
  src: CloudinaryImage;
  alt: string;
  accessible?: boolean;
}

export function Image(props: ImageProps): JSX.Element {
  return (
    <AdvancedImage
      plugins={[responsive(), placeholder()]}
      class={props.class}
      cldImg={props.src}
      alt="Farmer goes farming in tractor on farm."
    />
  );
}
