interface PageBannerBackgroundImageProps {
  image: string;
  className?: string;
}
const PageBannerBackgroundImage = ({
  image,
  className = 'h-full',
}: PageBannerBackgroundImageProps) => {
  return (
    <div
      className={`${className} bg-cover bg-no-repeat rounded`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default PageBannerBackgroundImage;
