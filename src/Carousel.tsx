import React, { useState, useEffect } from "react";
import { Button } from "./Button";

const data = [
        {
            "title": "Find me on Twitter",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/any"
        },
        {
            "title": "Welcome to Ark Labs",
            "link": "https://ark-labs.co.uk",
            "imageUrl": "https://placeimg.com/300/300/animals"
        },
        {
            "title": "Some sort of third title",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/architecture"
        },
        {
            "title": "A personal site perhaps?",
            "link": "https://robkendal.co.uk",
            "imageUrl": "https://placeimg.com/300/300/nature"
        },
        {
            "title": "Super item number five",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/people"
        },
        {
            "title": "Super item number six",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/tech"
        },
        {
            "title": "Super item number seven",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/animals"
        },
        {
            "title": "Super item number eight",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/people"
        },
        {
            "title": "Super item number the last",
            "link": "https://twitter.com/kendalmintcode",
            "imageUrl": "https://placeimg.com/300/300/tech"
        }
    ];

export interface CarouselProps {
    itemsVisible: {
        mobile: number;
        tablet: number;
        large: number;
    }
}

export const Carousel = ({ itemsVisible }: CarouselProps) => {
    let viewableItemCount = 4;
    const [lastVisibleItem, setLastVisibleItem] = useState<number>(0);
    const [gridPercentage, setGridPercentage] = useState<number>(25);

    const handleWindowSizeChange = () => {
        if (window.innerWidth <= 640) {
            setGridPercentage(100/itemsVisible.mobile);
            viewableItemCount = itemsVisible.mobile;
        }
        if (window.innerWidth > 640) {
            setGridPercentage(100/itemsVisible.tablet);
            viewableItemCount = itemsVisible.tablet;
        }
        if (window.innerWidth > 1024 ) {
            setGridPercentage(100/itemsVisible.large);
            viewableItemCount = itemsVisible.large;
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleClickScroll = (type: 'prev' | 'next') => {
        let scrollTo = lastVisibleItem;
        if (type === 'prev') {
            if (lastVisibleItem !== 0) {
                scrollTo = lastVisibleItem - 1;
            }
        } else {
            if (lastVisibleItem < data.length - viewableItemCount && lastVisibleItem !== data.length - 1) {
                scrollTo = lastVisibleItem + 1;
            }
        }
        setLastVisibleItem(scrollTo);
        const element = document.getElementById(`item${scrollTo}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    };

    return (
        <div className="block">
            <div id="carousel-item"
                 className="grid overflow-auto gap-2"
                 style={{ gridTemplateColumns: `repeat(${data.length}, ${gridPercentage}%)` }}
            >
                {
                    data.map((item, index) => (
                        <div key={index} id={`item${index}`} style={{ transition: '250ms all'}}>
                            <img width="100%" src={item.imageUrl} />
                        </div>
                    ))
                }
            </div>
            <div>
                <Button onClick={() => handleClickScroll('prev')}>prev</Button>
                <Button onClick={() => handleClickScroll('next')}>next</Button>
            </div>
        </div>
    )
};

export default Carousel;