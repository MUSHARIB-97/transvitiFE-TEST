import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  caption?: string;
}

const MyImage: React.FC<{ image: ImageProps }> = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
    <span>{image.caption}</span>
  </div>
);

export default MyImage;
