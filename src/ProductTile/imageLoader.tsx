import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import clsx from 'clsx';

interface ImageLoaderProps {
  height?: string;
}
const ImageLoader = ({ height = 'h-auto' }: ImageLoaderProps) => {
  return (
    <div className={`rounded ${height} w-full`}>
      <Skeleton className="h-full" />
    </div>
  );
};

export default ImageLoader;
