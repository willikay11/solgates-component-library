import React, { isValidElement, ReactNode, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  ArrowLeftSLine,
  ArrowRightSLine,
  CheckboxBlankCircleFill,
} from './Icons';
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
  const [viewableItemCount, setViewableItemCount] = useState(4);
  const [lastVisibleItem, setLastVisibleItem] = useState<number>(0);
  const [gridPercentage, setGridPercentage] = useState<number>(25);
  const [showButtons, setShowButtons] = useState<boolean>(
    arrowPosition !== ARROW_POSITION.center
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('swiped');
      handleClickScroll('next');
    },
    onSwipedRight: () => handleClickScroll('prev'),
  });
  // const [touchPosition, setTouchPosition] = useState<number | null>(null);

  // const handleTouchStart = (event: any) => {
  //   const touchDown: number = event.touches[0].clientX;
  //   setTouchPosition(touchDown)
  // }

  // const handleTouchMove = (e: any) => {
  //   const touchDown = touchPosition
  //
  //   if(touchDown === null) {
  //     return
  //   }
  //
  //   const currentTouch = e.touches[0].clientX
  //   const diff = touchDown - currentTouch
  //
  //   if (diff > 1) {
  //     handleClickScroll('next');
  //   }
  //
  //   if (diff < -1) {
  //     handleClickScroll('prev');
  //   }
  //
  //   setTouchPosition(null)
  // }

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

  const handleClickScroll = (type: 'prev' | 'next', moveBy: number = 1) => {
    let scrollTo = lastVisibleItem;
    if (type === 'prev') {
      if (lastVisibleItem !== 0) {
        scrollTo = lastVisibleItem - moveBy;
      }
    } else {
      if (
        lastVisibleItem < items.length - viewableItemCount &&
        lastVisibleItem !== items.length - moveBy
      ) {
        scrollTo = lastVisibleItem + moveBy;
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
      <div {...handlers}> You can swipe here </div>
      {title ||
        (arrowPosition === ARROW_POSITION.topRight && (
          <div className={`flex flex-row justify-between mb-2.5`}>
            {isValidElement(title) ? (
              title
            ) : (
              <p className="text-xl leading-7 font-normal text-gray-800">
                {title}
              </p>
            )}
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
                  handleClickScroll('prev');
                }}
              >
                <ArrowLeftSLine size={14} color={colors.orange['600']} />
              </button>
              <button
                className="rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClickScroll('next');
                }}
              >
                <ArrowRightSLine size={14} color={colors.orange['600']} />
              </button>
            </div>
          </div>
        ))}
      <div
        {...handlers}
        id="carousel-item"
        className="grid overflow-hidden gap-2"
        style={{
          gridTemplateColumns: `repeat(${items.length}, ${gridPercentage}%)`,
        }}
        // onTouchStart={(event) => handleTouchStart(event)}
        // onTouchMove={handleTouchMove}
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
      {showDots && (
        <div className="absolute bottom-[15px] flex flex-row w-full justify-center">
          {items.map((_, index) => (
            <div
              className="cursor-pointer mr-1"
              onClick={(event) => {
                event.stopPropagation();
                if (index > lastVisibleItem) {
                  handleClickScroll('next', index - lastVisibleItem);
                } else {
                  handleClickScroll('prev', lastVisibleItem - index);
                }
              }}
            >
              <CheckboxBlankCircleFill
                key={index}
                size={10}
                color={
                  index === lastVisibleItem
                    ? colors.orange['200']
                    : colors.white
                }
              />
            </div>
          ))}
        </div>
      )}
      {showButtons && (
        <div className={`flex flex-row ${position}`}>
          <button
            className="xs:max-sm:hidden rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center mr-2"
            onClick={(event) => {
              event.stopPropagation();
              handleClickScroll('prev');
            }}
          >
            <ArrowLeftSLine size={14} color={colors.orange['600']} />
          </button>
          <button
            className="xs:max-sm:hidden rounded-full bg-gray-50 h-[28px] w-[28px] inline-flex flex-row justify-center items-center"
            onClick={(event) => {
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
