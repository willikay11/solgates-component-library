import React, { useEffect, useRef, useState } from 'react';

interface ImageTileProps {
  image: string;
  onImageLoaded: (loaded: boolean) => void;
}

const ImageTile = ({ image, onImageLoaded }: ImageTileProps) => {
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
      className={`rounded w-full ${imageLoaded ? 'visible' : 'hidden'}`}
      onLoad={() => setImageLoaded(true)}
      src={image}
    />
  );
};

export default ImageTile;
