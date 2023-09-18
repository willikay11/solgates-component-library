import React, {useEffect, useState} from 'react';
// import {
//   AdvancedImage,
//   lazyload,
//   placeholder,
//   responsive,
// } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dp1buffig',
  },
});

interface ImageTileProps {
  image: string;
  onImageLoaded: (loaded: boolean) => void;
}

const ImageTile = ({ image, onImageLoaded }: ImageTileProps) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const cldImage = cld.image(image);

  useEffect(() => {
    setImageUrl(cldImage.toURL())
  }, [cldImage]);

  return (
    <>
      <img
        alt="product"
        className="rounded"
        onLoad={() => onImageLoaded(true)}
        src={imageUrl}
      />
      {/*<div style={{ backgroundColor: '#f4f4f4', width: '100vw', height: 'auto' }}>*/}
      {/*  <AdvancedImage*/}
      {/*    cldImg={cldImage}*/}
      {/*    plugins={[lazyload(), responsive(), placeholder({ mode: 'blur' })]}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div style={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: '#f4f4f4', width: '100%'}} />*/}
      {/*<AdvancedImage*/}
      {/*  cldImg={cld.image(image)}*/}
      {/*  plugins={[lazyload(), responsive(), placeholder({ mode: 'blur' })]}*/}
      {/*/>*/}
    </>
  );
};

export default ImageTile;
