import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

interface ImageLoaderProps {
  height?: string;
}
const ImageLoader = ({ height = 'h-auto' }: ImageLoaderProps) => {
  return (
      <div className={`rounded ${height} w-full`}>
        <Skeleton className="h-full"/>
      </div>
    // <img
    //   alt="Image"
    //   className={`rounded ${height}`}
    //   style={{ width: '100%', backgroundColor: '#f4f4f4' }}
    //   loading="eager"
    //   src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    // />
  );
};

export default ImageLoader;
