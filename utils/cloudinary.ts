import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoSize } from "@cloudinary/url-gen/actions/resize";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { useMemo } from "preact/hooks";

const cloud = new Cloudinary({
  cloud: {
    cloudName: "dg5grlmv5",
  },
});

export interface ImageOptions {
  width?: number;
  height?: number;

  nofocus?: boolean;
}

function image(
  publicId: string,
  { width, height, nofocus }: ImageOptions = {},
): CloudinaryImage {
  let image = cloud.image(publicId);

  if (width || height) {
    let resize = autoSize(width, height);

    if (!nofocus) resize = resize.gravity(autoGravity());

    image = image.resize(resize);
  }

  return image.delivery(quality(autoQuality())).delivery(format(autoFormat()));
}

export function useImage(
  publicId: string,
  options?: ImageOptions,
): CloudinaryImage {
  return useMemo(() => image(publicId, options), [publicId, options]);
}
