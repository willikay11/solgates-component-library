import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  // IconContainer,
  PRODUCT_TYPE,
  ProductTileProps,
  ProductTile,
  // User6Line,
} from '../src';
// import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Product Tile',
  component: ProductTile,
};

export default meta;
const Template: Story<ProductTileProps> = (args) => (
  <div className="grid gap-2 grid-cols-2 md:gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 h-screen">
    <ProductTile {...args} />
    <ProductTile {...args} />
    <ProductTile {...args} />
    <ProductTile {...args} />
    <ProductTile {...args} />
    <ProductTile {...args} />
  </div>
);

export const Products = Template.bind({});
Products.args = {
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
};

export const Product = Template.bind({});
Product.args = {
  imageUrl:
    'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
  type: PRODUCT_TYPE.PRODUCT,
};

// export const Collection = Template.bind({});
// Collection.args = {
//   type: PRODUCT_TYPE.COLLECTION,
//   imageUrl: 'high-tops-are-back.png',
//   name: 'Jordans',
// };

export const Carousel = Template.bind({});
Carousel.args = {
  type: PRODUCT_TYPE.CAROUSEL,
  name: 'Air Jordan 1 Retro High OG',
  smallDescription: 'Dutch Green',
  buttonName: 'Nike',
  price: 'KSH 12,200',
  addedToWishList: true,
  onAddToWishList: () => console.log('Added to wishlist'),
  onRemoveFromWishlist: () => console.log('Removed from wishlist'),
  carouselImages: [
    'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
  ],
};

// export const Content = Template.bind({});
// Content.args = {
//   type: PRODUCT_TYPE.CONTENT,
//   content: (
//     <div className="h-full w-full bg-orange-100 rounded-[5px] border-dashed border-orange-600 border-[1px] flex flex-1 items-center cursor-pointer">
//       <div className="flex flex-col items-center justify-center w-full">
//         <IconContainer borderRadius="rounded-full" bgColor="bg-orange-200">
//           <User6Line color={colors.orange['600']} />
//         </IconContainer>
//         <p className="text-xs leading-4 font-normal text-orange-600 text-center mt-2.5">
//           Got a plug you would like us to add? Please share their details
//         </p>
//       </div>
//     </div>
//   ),
// };
