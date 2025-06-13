import { useState, useEffect, useRef } from 'react';
import { ImageLoader } from '../ProductTile/imageLoader';

interface PageBannerImageInterface {
  image: string;
  placeholderHeight?: string;
}
const PageBannerImage = ({
  image,
  placeholderHeight,
}: PageBannerImageInterface) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, [imgRef]);

  return (
    <>
      {!imageLoaded && <ImageLoader height={placeholderHeight} />}
      <img
        ref={imgRef}
        alt="product"
        className={`rounded w-full ${imageLoaded ? 'visible' : 'hidden'}`}
        src={image}
        onLoad={() => setImageLoaded(true)}
        decoding="async"
      />
    </>
  );
};

export default PageBannerImage;
