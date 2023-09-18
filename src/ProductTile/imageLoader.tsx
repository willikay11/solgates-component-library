import React from 'react';

const ImageLoader = () => {
  return (
    <img
      alt="Image"
      className="rounded"
      style={{ width: '100%', backgroundColor: '#f4f4f4', height: 'auto' }}
      loading="eager"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    />
  );
};

export default ImageLoader;
