import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
// import {
//   AdvancedImage,
//   lazyload,
//   placeholder,
//   responsive,
// } from '@cloudinary/react';
// import { Cloudinary } from '@cloudinary/base';

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: 'dp1buffig',
//   },
// });

interface ImageTileProps {
  image: string;
  onImageLoaded: (loaded: boolean) => void;
  height?: string;
  width?: string;
}

const ImageTile = ({ image, onImageLoaded, height, width }: ImageTileProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, [imgRef]);

  useEffect(() => {
    if (imageLoaded) {
      onImageLoaded(true);
    }
  }, [imageLoaded]);

  return (
    <img
      ref={imgRef}
      alt="product"
      className={clsx('rounded w-full', height, width, {
        'visible': imageLoaded,
        'hidden': !imageLoaded,
      })}
      onLoad={() => setImageLoaded(true)}
      src={image}
    />
  );
};

export default ImageTile;
