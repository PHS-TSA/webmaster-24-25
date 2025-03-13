import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import type { CloudinaryImage } from "@cloudinary/url-gen";
import type { JSX } from "preact";

interface ImageProps extends Omit<JSX.ImgHTMLAttributes, "src"> {
  src: CloudinaryImage;
  alt: string;
  accessible?: boolean;
}

export function Image({ src, alt, ...props }: ImageProps): JSX.Element {
  return (
    <AdvancedImage
      {...props}
      plugins={[responsive(), placeholder({ mode: "" })]}
      cldImg={src}
      alt={alt}
    />
  );
}
