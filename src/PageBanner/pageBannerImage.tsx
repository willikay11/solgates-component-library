import React, { useState } from 'react';
import ImageLoader from '../ProductTile/imageLoader';

interface PageBannerImageInterface {
  image: string;
}
const PageBannerImage = ({ image }: PageBannerImageInterface) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <>
      {!imageLoaded && <ImageLoader />}
      <img
        alt="product"
        className="rounded"
        onLoad={() => setImageLoaded(true)}
        src={image}
      />
    </>
  );
};

export default PageBannerImage;
