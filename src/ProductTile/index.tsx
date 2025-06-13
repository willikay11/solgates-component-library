import ProductDescription from './productDescription';
import { ReactNode, useEffect, useState } from 'react';
import CarouselImages from './carouselImages';
import ImageTile from './imageTile';
import { ImageLoader } from './imageLoader';
import { Heart3Line, Heart3LineFill } from '../Icons';
import colors from '../Colors';
import { Loading } from '../Loading';

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
  loaderHeight?: string;
}
export const ProductTile = ({
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
  loaderHeight = 'h-auto',
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
    <div className="group/product-tile w-full rounded">
      <div
        className="w-full relative rounded flex justify-center items-center cursor-pointer"
        onClick={() => onClick?.()}
      >
        {type === PRODUCT_TYPE.CAROUSEL && carouselImages?.length ? (
          <div className="h-full w-full relative">
            {!imageLoaded && <ImageLoader height={loaderHeight} />}
            <CarouselImages
              carouselImages={carouselImages}
              onAllCarouselImagesLoaded={(imageLoaded) =>
                setImageLoaded(imageLoaded)
              }
            />
            <div
              className="absolute top-2.5 right-3.5"
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
        ) : (
          <>
            {!imageLoaded && <ImageLoader height={loaderHeight} />}
            <ImageTile
              image={imageUrl}
              onImageLoaded={(imageLoaded) => setImageLoaded(imageLoaded)}
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
