import React, { isValidElement, ReactNode, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftSLine, ArrowRightSLine } from './Icons';
import colors from './Colors';

export enum ARROW_POSITION {
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomLeft',
  topRight = 'topRight',
  center = 'center',
}
interface CarouselItem {
  item: ReactNode;
}
export interface CarouselProps {
  id: string;
  instanceId: string;
  title?: string | ReactNode;
  itemsVisible: {
    mobile: number;
    tablet: number;
    large: number;
  };
  arrowPosition:
    | ARROW_POSITION.bottomLeft
    | ARROW_POSITION.bottomRight
    | ARROW_POSITION.topRight
    | ARROW_POSITION.center;
  items: CarouselItem[];
  showDots?: boolean;
}

export const Carousel = ({
  itemsVisible,
  items,
  arrowPosition,
  title,
  id,
  showDots = true,
}: CarouselProps) => {
  let sliderRef = useRef(null);
  const [showButtons, setShowButtons] = useState<boolean>(
    arrowPosition !== ARROW_POSITION.center
  );

  let position = 'justify-start';

  if (arrowPosition === ARROW_POSITION.bottomRight) {
    position = 'justify-end';
  }

  if (arrowPosition === ARROW_POSITION.topRight) {
    position = 'hidden';
  }

  if (arrowPosition === ARROW_POSITION.center) {
    position = 'absolute inset-y-1/2 px-2.5 w-full justify-between z-50';
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: itemsVisible.large,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: itemsVisible.mobile,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: itemsVisible.tablet,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots(dots: React.ReactNode): React.JSX.Element {
      if (!showDots) return <></>;
      return (
        <div className="absolute bottom-[15px] flex flex-row w-full justify-center">
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      );
    },
  };

  return (
    <div
      className="block w-full relative"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {title !== null ||
      isValidElement(title) ||
      arrowPosition === ARROW_POSITION.topRight ? (
        <div className="flex flex-row justify-between">
          {isValidElement(title) ? (
            <span className="mb-2.5">{title}</span>
          ) : title ? (
            <p className="text-xl leading-7 font-normal text-gray-800 mb-2.5">
              {title}
            </p>
          ) : null}
          {arrowPosition === ARROW_POSITION.topRight && (
            <div className="mb-2.5">
              <div
                className={`${
                  arrowPosition === ARROW_POSITION.topRight
                    ? 'inline-flex'
                    : 'hidden'
                }`}
              >
                <button
                  className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center mr-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    sliderRef.slickPrev();
                  }}
                >
                  <ArrowLeftSLine size={14} color={colors.orange['600']} />
                </button>
                <button
                  className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
                  onClick={(event) => {
                    event.stopPropagation();
                    sliderRef.slickNext();
                  }}
                >
                  <ArrowRightSLine size={14} color={colors.orange['600']} />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {items.map((item, index) => (
          <div
            key={index}
            id={`${id}-${index}`}
            style={{ transition: '250ms all' }}
            className="pr-2"
          >
            {item.item}
          </div>
        ))}
      </Slider>
      {showButtons && (
        <div className={`flex flex-row ${position}`}>
          <button
            className="xs:max-sm:hidden rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center mr-2"
            onClick={(event) => {
              event.stopPropagation();
              sliderRef.slickPrev();
            }}
          >
            <ArrowLeftSLine size={14} color={colors.orange['600']} />
          </button>
          <button
            className="xs:max-sm:hidden rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
            onClick={(event) => {
              event.stopPropagation();
              sliderRef.slickNext();
            }}
          >
            <ArrowRightSLine size={14} color={colors.orange['600']} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
