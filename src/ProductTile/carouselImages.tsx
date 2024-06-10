import React, { useEffect, useId, useState } from 'react';
import { ARROW_POSITION, Carousel } from '../Carousel';
import ImageTile from './imageTile';

interface CarouselImageProps {
  carouselImages: string[];
  onAllCarouselImagesLoaded: (loaded: boolean) => void;
}

const CarouselImages = ({
  carouselImages,
  onAllCarouselImagesLoaded,
}: CarouselImageProps) => {
  const [carouselImagesLoaded, setCarouselImagesLoaded] = useState<boolean[]>(
    []
  );
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const id = useId();

  useEffect(() => {
    if (carouselImagesLoaded.length > 0) {
      onAllCarouselImagesLoaded(true);
      setShowCarousel(true);
    }
  }, [carouselImagesLoaded]);

  return (
    // <div className={showCarousel ? 'visible' : 'hidden'}>
    <Carousel
      id={id}
      instanceId={id}
      itemsVisible={{ mobile: 1, tablet: 1, large: 1 }}
      arrowPosition={ARROW_POSITION.center}
      items={
        carouselImages?.map((carouselImage, index) => {
          return {
            item: (
              <ImageTile
                key={index}
                image={carouselImage}
                onImageLoaded={(imageLoader) => {
                  setCarouselImagesLoaded([
                    ...carouselImagesLoaded,
                    ...[imageLoader],
                  ]);
                }}
              />
            ),
          };
        })!
      }
    />
  );
};

export default CarouselImages;
