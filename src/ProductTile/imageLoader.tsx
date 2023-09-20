import React from 'react';

interface ImageLoaderProps {
  height?: string;
}
const ImageLoader = ({ height = 'h-auto' }: ImageLoaderProps) => {
  return (
    <img
      alt="Image"
      className={`rounded ${height}`}
      style={{ width: '100%', backgroundColor: '#f4f4f4' }}
      loading="eager"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    />
  );
};

export default ImageLoader;
