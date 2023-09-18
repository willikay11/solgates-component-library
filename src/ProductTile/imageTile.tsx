import React, { Suspense } from 'react';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';

interface ImageTileProps {
  image: string;
}
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dp1buffig',
  },
});

const ImageTile = ({ image }: ImageTileProps) => {
  // const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <>
      {/*{!imageLoaded && (*/}
      {/*  <img*/}
      {/*    alt="Image"*/}
      {/*    className="rounded"*/}
      {/*    style={{ width: '100%', backgroundColor: '#f4f4f4', height: 'auto' }}*/}
      {/*    loading="eager"*/}
      {/*    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"*/}
      {/*  />*/}
      {/*)}*/}
      {/*  <img*/}
      {/*      onLoad={() => setImageLoaded(true)}*/}
      {/*      src={image}*/}
      {/*  />*/}
      <Suspense fallback={
        <img
            alt="Image"
            className="rounded"
            style={{ width: '100%', backgroundColor: '#f4f4f4', height: 'auto' }}
            loading="eager"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        />
      }>
        <AdvancedImage
            cldImg={cld.image(image)}
            plugins={[lazyload(), responsive(), placeholder({ mode: 'blur' })]}
        />
      </Suspense>
      {/*<div style={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: '#f4f4f4', width: '100%'}} />*/}
      {/*<AdvancedImage*/}
      {/*  cldImg={cld.image(image)}*/}
      {/*  plugins={[lazyload(), responsive(), placeholder({ mode: 'blur' })]}*/}
      {/*/>*/}
    </>
  );
};

export default ImageTile;
