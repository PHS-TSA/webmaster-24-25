import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { useMemo } from "preact/hooks";

export const cloud = new Cloudinary({
  cloud: {
    cloudName: "dg5grlmv5",
  },
});

export function image(publicId: string): CloudinaryImage {
  return cloud
    .image(publicId)
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));
}

export function useImage(publicId: string): CloudinaryImage {
  return useMemo(() => image(publicId), [publicId]);
}
