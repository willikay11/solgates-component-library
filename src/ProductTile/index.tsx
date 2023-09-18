import ProductDescription from './productDescription';
import React, { ReactNode } from 'react';
import CarouselImages from './carouselImages';
import ImageTile from './imageTile';

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
  carouselImages,
  imageUrl,
  onClickShop,
  addingToCart,
  inCart,
  onAddToCart,
  onRemoveFromCart,
  onClick,
}: ProductTileProps) => {
  return (
    <div className="group/product-tile w-full rounded">
      <div
        className="w-full relative rounded flex justify-center items-center cursor-pointer"
        onClick={() => onClick?.()}
      >
        {type === PRODUCT_TYPE.CAROUSEL && carouselImages?.length ? (
          <CarouselImages carouselImages={carouselImages} />
        ) : (
          <ImageTile image={imageUrl} />
        )}
      </div>
      <ProductDescription
        type={type}
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
    </div>
  );
};

export default ProductTile;
