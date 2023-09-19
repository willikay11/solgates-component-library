import React, { useState } from 'react';
import ImageLoader from '../ProductTile/imageLoader';

interface PageBannerImageInterface {
  image: string;
  placeholderHeight?: string;
}
const PageBannerImage = ({ image, placeholderHeight }: PageBannerImageInterface) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <>
      {!imageLoaded && <ImageLoader height={placeholderHeight} />}
      <img
        alt="product"
        className={`rounded ${imageLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
        src={image}
      />
    </>
  );
};

export default PageBannerImage;
