import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PRODUCT_TYPE, ProductTileProps, ProductTile, Button } from '../src';

const meta: Meta = {
  title: 'Data Display/Product Tile',
  component: ProductTile,
};

export default meta;
type Story = StoryObj<typeof ProductTile>;

export const Products: Story = {
  render: (args) => (
    <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
    </div>
  ),
  args: {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
    releaseDate: 'Apr 20',
    addedToWishList: false,
    onAddToWishList: () => {
      console.log('added to wishlist');
    },
    type: PRODUCT_TYPE.PRODUCTS,
    loaderHeight: 'h-64',
  },
};

export const Product: Story = {
  render: (args) => (
    <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
    </div>
  ),
  args: {
    loaderHeight: 'h-56',
    imageUrl:
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    type: PRODUCT_TYPE.PRODUCT,
  },
};
export const Carousel: Story = {
  render: (args) => (
    <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
    </div>
  ),
  args: {
    type: PRODUCT_TYPE.CAROUSEL,
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
    addedToWishList: true,
    onAddToWishList: () => console.log('Added to wishlist'),
    onRemoveFromWishlist: () => console.log('Removed from wishlist'),
    loaderHeight: 'h-64',
    carouselImages: [
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    ],
  },
};

export const ImageFallback: Story = {
  render: (args) => (
    <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
    </div>
  ),
  args: {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbblajhsdkdshasd.webp',
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
    releaseDate: 'Apr 20',
    addedToWishList: false,
    onAddToWishList: () => {
      console.log('added to wishlist');
    },
    type: PRODUCT_TYPE.PRODUCTS,
    loaderHeight: 'h-64',
  },
};
