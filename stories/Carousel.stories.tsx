import React from 'react';
import { Meta, Story } from '@storybook/react'
import {ARROW_POSITION, Carousel, CarouselProps, ProductTile} from "../src";

const meta: Meta = {
    title: 'Data Display/Carousel',
    component: Carousel
}

export default meta;

const Template: Story<CarouselProps> = (args) =>
    <>
        <div className="w-full">
            <Carousel {...args} />
        </div>

        <div className="w-full">
            <Carousel {...args} />
        </div>
    </>;

export const Default = Template.bind({});
Default.args = {
    id: 'a',
    title: 'Popular Right Now',
    arrowPosition: ARROW_POSITION.topRight,
    itemsVisible: {
        mobile: 2,
        tablet: 3,
        large: 4
    },
    items: [
        {
            item: <ProductTile
                    id="1"
                    name = 'Air Jordan 1 Retro High OG'
                    smallDescription = 'Dutch Green'
                    buttonName = 'Nike'
                    price = 'KSH 12,200'
                    imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
                  />
        },
        {
            item: <ProductTile
                id="2"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="3"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="4"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="5"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="6"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="7"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
        {
            item: <ProductTile
                id="8"
                name = 'Air Jordan 1 Retro High OG'
                smallDescription = 'Dutch Green'
                buttonName = 'Nike'
                price = 'KSH 12,200'
                imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
            />
        },
    ]
}