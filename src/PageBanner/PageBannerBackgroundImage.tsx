import React from 'react';
interface PageBannerBackgroundImageProps {
  image: string;
}
const PageBannerBackgroundImage = ({
  image,
}: PageBannerBackgroundImageProps) => {
  return (
    <div
      className="h-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default PageBannerBackgroundImage;
