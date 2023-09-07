import ProductDescription from './productDescription';
import React, { ReactNode } from 'react';

export enum PRODUCT_TYPE {
  PRODUCTS = 'products',
  PRODUCT = 'product',
  COLLECTION = 'collection',
  RELEASES = 'releases',
  CAROUSEL = 'carousel',
  CONTENT = 'content',
}

export interface ProductTileProps {
  imageUrl: string;
  id: string;
  type?:
    | PRODUCT_TYPE.PRODUCTS
    | PRODUCT_TYPE.PRODUCT
    | PRODUCT_TYPE.COLLECTION
    | PRODUCT_TYPE.RELEASES
    | PRODUCT_TYPE.CAROUSEL
    | PRODUCT_TYPE.CONTENT;
  content?: ReactNode;
  name?: string;
  smallDescription?: string;
  buttonName?: string;
  price?: string;
  onAddToWishList?: (id: string) => void;
  onRemoveFromWishlist?: (id: string) => void;
  addedToWishList?: boolean;
  onClick?: () => void;
  onClickShop?: () => void;
  releaseDate?: string;
  carouselImages?: string[];
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
  inCart?: boolean;
  addingToCart?: boolean;
  showWishList?: boolean;
}
const ProductTile = ({
  name,
  price,
  smallDescription,
  buttonName,
  type,
  onClickShop,
  addingToCart,
  inCart,
  onAddToCart,
  onRemoveFromCart,
}: ProductTileProps) => {
  return (
    <>
      {type === PRODUCT_TYPE.PRODUCTS ||
        (type === PRODUCT_TYPE.CAROUSEL && (
          <ProductDescription
            name={name}
            smallDescription={smallDescription}
            price={price}
            onClickShop={onClickShop}
            buttonName={buttonName}
            addingToCart={addingToCart}
            inCart={inCart}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
    </>
  );
};

export default ProductTile;
