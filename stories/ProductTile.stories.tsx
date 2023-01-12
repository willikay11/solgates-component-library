import React from 'react';
import { Meta, Story } from '@storybook/react';
import {PRODUCT_TYPE, ProductTile, ProductTileProps} from "../src";

const meta: Meta = {
    title: 'Data Display/Product Tile',
    component: ProductTile
}

export default meta;

const Template: Story<ProductTileProps> = (args) =>
    <div className="grid gap-2 grid-cols-2 md:gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 h-64">
        <ProductTile {...args} />
        <ProductTile {...args} />
        <ProductTile {...args} />
        <ProductTile {...args} />
        <ProductTile {...args} />
    </div>;

export const Products = Template.bind({});
Products.args = {
    imageUrl: '',
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
};

export const Product = Template.bind({});
Product.args = {
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png',
    type: PRODUCT_TYPE.PRODUCT,
};

export const Collection = Template.bind({});
Collection.args = {
    type: PRODUCT_TYPE.COLLECTION,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png',
    name: 'Jordans'
};
