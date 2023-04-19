// @ts-nocheck
import React, {useId, useState} from "react";
import Img, {CloudimageProvider} from "react-cloudimage-responsive";
import Carousel, {ARROW_POSITION} from "./Carousel";

const cloudImageConfig = {
    token: 'cyqqqhlxia',
    baseURL: 'https://cyqqqhlxia.cloudimg.io/_solgates_/'
};

export enum PRODUCT_TYPE {
   PRODUCTS = 'products',
   PRODUCT = 'product',
   COLLECTION = 'collection',
   RELEASES = 'releases',
   CAROUSEL = 'carousel'
}

export interface ProductTileProps {
  imageUrl: string;
  id: string;
  type?: PRODUCT_TYPE.PRODUCTS | PRODUCT_TYPE.PRODUCT | PRODUCT_TYPE.COLLECTION | PRODUCT_TYPE.RELEASES | PRODUCT_TYPE.CAROUSEL;
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
}

export const ProductTile = ({
  id,
  imageUrl,
  type = PRODUCT_TYPE.PRODUCTS,
  name,
  buttonName,
  smallDescription,
  price,
  addedToWishList,
  onClick,
  onClickShop,
  releaseDate,
  onAddToWishList,
  onRemoveFromWishlist,
  carouselImages
}: ProductTileProps) => {
  const [inWishList, setInWishlist] = useState<boolean>(addedToWishList || false);

  const addToWishList = () => {
      setInWishlist(true);
      onAddToWishList?.(id);
  }

  const removeFromWishList = () => {
      setInWishlist(false);
      onRemoveFromWishlist?.(id);
  }
    return(
      <div className={`group/product-tile w-full ${type === PRODUCT_TYPE.COLLECTION ? 'h-full' : 'h-auto'}  rounded`}>
        <div className={`w-full ${type === PRODUCT_TYPE.COLLECTION ? 'h-full' : 'h-auto'} relative rounded bg-gray-100 flex justify-center items-center cursor-pointer`} onClick={() => onClick?.()}>
            {
                type === PRODUCT_TYPE.CAROUSEL && carouselImages?.length ? (
                    <Carousel
                        id={useId()}
                        itemsVisible={{ mobile: 1, tablet: 1, large: 1 }}
                        arrowPosition={ARROW_POSITION.center}
                        items={carouselImages.map((carouselImage, index) => {
                            return {
                                item:
                                    <CloudimageProvider key={index} config={cloudImageConfig}>
                                        <Img src={carouselImage} doNotReplaceURL alt="Product image" />
                                    </CloudimageProvider>
                            }
                        })}
                    />
                ) : (
                    <CloudimageProvider config={cloudImageConfig}>
                        <Img src={imageUrl} doNotReplaceURL alt="Product image" />
                    </CloudimageProvider>
                )
            }
            {
                type === PRODUCT_TYPE.PRODUCTS || type === PRODUCT_TYPE.CAROUSEL ? (inWishList ?
                        <div onClick={(event) => {
                                event.stopPropagation();
                                removeFromWishList()
                            }}
                        >
                            <Heart3LineFill
                                size={14}
                                color={colors.red["500"]}
                                className="absolute z-20 top-3 right-3"
                            />
                        </div>
                        :
                        <div onClick={(event) => {
                                event.stopPropagation();
                                addToWishList()
                            }}
                        >
                            <Heart3Line
                                size={14}
                                color={colors.red["500"]}
                                className="absolute z-20 top-3 right-3 invisible group-hover/product-tile:visible"
                            />
                        </div>
                ) : type === PRODUCT_TYPE.COLLECTION ? (
                    <div className="absolute z-20 top-3 left-3">
                        <p className="text-base leading-6 font-bold text-gray-800">{name}</p>
                        <Button onClick={() => onClick?.()} type={ButtonTypes.link} className="bg-transparent py-0">Shop Collection <ArrowRightLine size={14} color={colors.blue["500"]} /></Button>
                    </div>
                ) : type === PRODUCT_TYPE.RELEASES ? (
                    <div className="absolute z-20 top-3 right-3 bg-gray-200 rounded p-2.5">
                        <span className="text-xs leading-4 font-medium text-gray-800">{releaseDate}</span>
                    </div>
                ) : null
            }
        </div>
        {
            type === PRODUCT_TYPE.PRODUCTS && (
                <div className="mt-2.5">
                    <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">{name}</p>
                    <div>
                        {smallDescription && <span className="text-xs leading-4 font-normal mt-1.5 text-gray-500">{smallDescription}</span>}

                        {buttonName && <><span className="text-xs leading-4 font-normal mt-1.5 text-gray-500"> | </span><Button onClick={() => onClickShop?.()} className="py-0" type={ButtonTypes.link}>{buttonName}</Button></>}
                    </div>
                    <p className="text-xs leading-4 font-semibold mt-1.5 text-gray-800">{price}</p>
                </div>
            )
        }
      </div>
  );
}