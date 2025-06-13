import Skeleton from 'react-loading-skeleton';

interface ImageLoaderProps {
  height?: string;
}
export const ImageLoader = ({ height = 'h-auto' }: ImageLoaderProps) => {
  return (
    <div className={`rounded ${height} w-full`}>
      <Skeleton height="100%" width="100%" />
    </div>
  );
};
