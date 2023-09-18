import React, { useId } from 'react';
import { ARROW_POSITION, Carousel } from '../Carousel';
import ImageTile from './imageTile';

interface CarouselImageProps {
  carouselImages: string[];
}

const CarouselImages = ({ carouselImages }: CarouselImageProps) => {
  const id = useId();
  return (
    <Carousel
      id={id}
      instanceId={id}
      itemsVisible={{ mobile: 1, tablet: 1, large: 1 }}
      arrowPosition={ARROW_POSITION.center}
      items={carouselImages?.map((carouselImage, index) => {
        return {
          item: <ImageTile key={index} image={carouselImage} />,
        };
      })}
    />
  );
};

export default CarouselImages;
