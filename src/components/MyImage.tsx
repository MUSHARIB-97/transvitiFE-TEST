import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageProps } from "../types/dataTypes";

const MyImage: React.FC<{ image: ImageProps }> = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width}
      className={image.className}
      effect="opacity"
    />
  </div>
);

export default MyImage;
