import React, { useState, useEffect, ReactNode } from 'react';
import { ArrowLeftSLine, ArrowRightSLine } from './Icons';
import colors from './Colors';

//generates random id;
// const guid = () => {
//     let s4 = () => {
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//     return s4();
// }

// const id = guid();

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
  title?: string;
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
}

export const Carousel = ({
  itemsVisible,
  items,
  arrowPosition,
  title,
  id,
}: CarouselProps) => {
  const [viewableItemCount, setViewableItemCount] = useState(4);
  const [lastVisibleItem, setLastVisibleItem] = useState<number>(0);
  const [gridPercentage, setGridPercentage] = useState<number>(25);
  const [showButtons, setShowButtons] = useState<boolean>(
    arrowPosition !== ARROW_POSITION.center
  );

  const handleWindowSizeChange = () => {
    if (window.innerWidth <= 640) {
      setGridPercentage(100 / itemsVisible.mobile);
      setViewableItemCount(itemsVisible.mobile);
    }
    if (window.innerWidth > 640) {
      setGridPercentage(100 / itemsVisible.tablet);
      setViewableItemCount(itemsVisible.tablet);
    }
    if (window.innerWidth > 1024) {
      setGridPercentage(100 / itemsVisible.large);
      setViewableItemCount(itemsVisible.large);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  const handleClickScroll = (type: 'prev' | 'next') => {
    let scrollTo = lastVisibleItem;
    if (type === 'prev') {
      if (lastVisibleItem !== 0) {
        scrollTo = lastVisibleItem - 1;
      }
    } else {
      if (
        lastVisibleItem < items.length - viewableItemCount &&
        lastVisibleItem !== items.length - 1
      ) {
        scrollTo = lastVisibleItem + 1;
      }
    }
    setLastVisibleItem(scrollTo);
    const element = document.getElementById(`${id}-${scrollTo}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

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

  return (
    <div
      className="block w-full relative"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className={`flex flex-row justify-between mb-2.5`}>
        {title && (
          <p className="text-xl leading-7 font-normal text-gray-800">{title}</p>
        )}
        <div
          className={`${
            arrowPosition === ARROW_POSITION.topRight ? 'inline-flex' : 'hidden'
          }`}
        >
          <button
            className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center mr-2"
            onClick={event => {
              event.stopPropagation();
              handleClickScroll('prev');
            }}
          >
            <ArrowLeftSLine size={14} color={colors.orange['600']} />
          </button>
          <button
            className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
            onClick={event => {
              event.stopPropagation();
              handleClickScroll('next');
            }}
          >
            <ArrowRightSLine size={14} color={colors.orange['600']} />
          </button>
        </div>
      </div>
      <div
        id="carousel-item"
        className="grid overflow-auto gap-2 pb-4"
        style={{
          gridTemplateColumns: `repeat(${items.length}, ${gridPercentage}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            id={`${id}-${index}`}
            style={{ transition: '250ms all' }}
          >
            {item.item}
          </div>
        ))}
      </div>
      {showButtons && (
        <div className={`flex flex-row ${position}`}>
          <button
            className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center mr-2"
            onClick={event => {
              event.stopPropagation();
              handleClickScroll('prev');
            }}
          >
            <ArrowLeftSLine size={14} color={colors.orange['600']} />
          </button>
          <button
            className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
            onClick={event => {
              event.stopPropagation();
              handleClickScroll('next');
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
