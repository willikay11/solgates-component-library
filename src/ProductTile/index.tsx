import ProductDescription from './productDescription';
import React, { ReactNode, useEffect, useState } from 'react';
import CarouselImages from './carouselImages';
import ImageTile from './imageTile';
import ImageLoader from './imageLoader';
import { Heart3Line, Heart3LineFill } from '../Icons';
import colors from '../Colors';
import { Loading } from '../Loading';
import clsx from 'clsx';

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
  addingToWishlist?: boolean;
  onRemoveFromWishlist?: (id: string) => void;
  addedToWishList?: boolean;
  onClick?: () => void;
  onClickShop?: () => void;
  releaseDate?: string;
  carouselImages?: string[];
  // onAddToCart?: () => void;
  // onRemoveFromCart?: () => void;
  // inCart?: boolean;
  // addingToCart?: boolean;
  showWishList?: boolean;
  isLoggedIn?: boolean;
  height?: string;
  width?: string;
}
const ProductTile = ({
  id,
  name,
  price,
  smallDescription,
  buttonName,
  type,
  carouselImages,
  imageUrl,
  onClickShop,
  // addingToCart,
  // inCart,
  // onAddToCart,
  // onRemoveFromCart,
  onClick,
  onAddToWishList,
  addedToWishList,
  onRemoveFromWishlist,
  addingToWishlist,
  isLoggedIn = false,
  height,
  width,
}: ProductTileProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [addedToWishlist, setAddedToWishlist] = useState<boolean>(false);

  useEffect(() => {
    if (addedToWishList) {
      setAddedToWishlist(true);
    } else {
      setAddedToWishlist(false);
    }
  }, [addedToWishList]);

  return (
    <div className={clsx('group/product-tile w-full rounded', height, width)}>
      <div
        className={clsx('w-full relative rounded flex justify-center items-center', {
          'cursor-pointer': type !== PRODUCT_TYPE.PRODUCT,
        })}
        onClick={() => onClick?.()}
      >
        {type === PRODUCT_TYPE.CAROUSEL && carouselImages?.length ? (
          <>
            {!imageLoaded ? (
                <ImageLoader height="auto" />
            ) : null}
            <div className={clsx('h-full relative', {
              'visible': imageLoaded,
              'invisible': !imageLoaded,
            })}>
              <CarouselImages
                  carouselImages={carouselImages}
                  onAllCarouselImagesLoaded={(imageLoaded) => {
                    setImageLoaded(imageLoaded)
                  }}
              />
              <div
                  className="absolute top-2.5 right-2.5"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (addedToWishList) {
                      setAddedToWishlist(false);
                      onRemoveFromWishlist?.(id);
                    } else {
                      if (isLoggedIn) {
                        setAddedToWishlist(true);
                      }
                      onAddToWishList?.(id);
                    }
                  }}
              >
                {addingToWishlist ? (
                    <Loading fillColor={colors.orange['600']} />
                ) : addedToWishlist ? (
                    <Heart3LineFill color={colors.red['500']} />
                ) : (
                    <Heart3Line color={colors.gray['600']} />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {!imageLoaded && <ImageLoader height="auto" />}
            <ImageTile
              image={imageUrl}
              onImageLoaded={(imageLoaded) => setImageLoaded(imageLoaded)}
              height={height}
              width={width}
            />
          </>
        )}
      </div>
      <ProductDescription
        type={type}
        name={name}
        smallDescription={smallDescription}
        price={price}
        onClick={onClick}
        onClickShop={onClickShop}
        buttonName={buttonName}
        // addingToCart={addingToCart}
        // inCart={inCart}
        // onAddToCart={onAddToCart}
        // onRemoveFromCart={onRemoveFromCart}
      />
    </div>
  );
};

export { ProductTile };
