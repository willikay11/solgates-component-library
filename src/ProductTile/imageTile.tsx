import React from 'react';
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
}

const ImageTile = ({ image, onImageLoaded }: ImageTileProps) => {
  return (
    <img
      alt="product"
      className="rounded w-full"
      onLoad={() => onImageLoaded(true)}
      src={image}
    />
  );
};

export default ImageTile;
