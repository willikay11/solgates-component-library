import React, {useState} from "react";
import {Button, ButtonTypes} from "./Button";
import {RiHeart3Fill, RiHeart3Line, RiArrowRightLine } from "react-icons/all";
import colors from "tailwindcss/colors";

export enum PRODUCT_TYPE {
   PRODUCTS = 'products',
   PRODUCT = 'product',
   COLLECTION = 'collection'
}

export interface ProductTileProps {
  imageUrl: string;
  type?: PRODUCT_TYPE.PRODUCTS | PRODUCT_TYPE.PRODUCT | PRODUCT_TYPE.COLLECTION;
  name?: string;
  shop?: string;
  price?: string;
  addedToWishList?: boolean
}

export const ProductTile = ({ imageUrl, type = PRODUCT_TYPE.PRODUCTS, name, shop, price, addedToWishList }: ProductTileProps) => {
  const [inWishList] = useState<boolean>(addedToWishList || false);

  return(
      <div className="group/product-tile w-full h-full rounded cursor-pointer">
        <div className="w-full h-full relative rounded bg-gray-100 flex justify-center items-center">
            <img src={imageUrl} alt={name} />
            {
                type === PRODUCT_TYPE.PRODUCTS? (inWishList ?
                        <RiHeart3Fill color={colors.red["500"]} className="absolute z-20 top-3 right-3" />
                 : <RiHeart3Line className="absolute z-20 top-3 right-3 invisible group-hover/product-tile:visible" />
                ) : type === PRODUCT_TYPE.COLLECTION ?(
                    <div className="absolute z-20 top-3 left-3">
                        <p className="text-base leading-6 font-bold text-gray-800">{name}</p>
                        <Button onClick={() => console.log('clicked')} type={ButtonTypes.link} className="bg-transparent py-0">Shop Collection <RiArrowRightLine /></Button>
                    </div>
                ) : null
            }
        </div>
        {
            type === PRODUCT_TYPE.PRODUCTS && (
                <>
                    <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">{name}</p>
                    <p className="text-xs leading-4 font-normal mt-1.5 text-gray-500">Dutch Green | <Button onClick={() => console.log('clicked')} className="py-0" type={ButtonTypes.link}>{shop}</Button></p>
                    <p className="text-xs leading-4 font-semibold mt-1.5 text-gray-800">{price}</p>
                </>
            )
        }
      </div>
  );
}