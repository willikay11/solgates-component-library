import React, {useState} from "react";
import colors from "./Colors";
import { Button, ButtonTypes } from "./Button";
import { User6Line } from './Icons';

export enum PRODUCT_TYPE {
   PRODUCTS = 'products',
   PRODUCT = 'product',
   COLLECTION = 'collection'
}

export interface ProductTileProps {
  imageUrl: string;
  type?: PRODUCT_TYPE.PRODUCTS | PRODUCT_TYPE.PRODUCT | PRODUCT_TYPE.COLLECTION;
  name?: string;
  smallDescription?: string;
  buttonName?: string;
  price?: string;
  addedToWishList?: boolean;
  onClick?: () => void;
}

export const ProductTile = ({ imageUrl, type = PRODUCT_TYPE.PRODUCTS, name, buttonName, smallDescription, price, addedToWishList, onClick }: ProductTileProps) => {
  const [inWishList] = useState<boolean>(addedToWishList || false);

  return(
      <div className="group/product-tile w-full h-auto rounded cursor-pointer" onClick={() => onClick?.()}>
        <div className="w-full relative rounded bg-gray-100 flex justify-center items-center">
            <img src={imageUrl} alt={name} className="w-full" />
            {
                type === PRODUCT_TYPE.PRODUCTS? (inWishList ?
                        <User6Line size={14} color={colors.red["500"]} className="absolute z-20 top-3 right-3" />
                        :
                        <User6Line size={14} color={colors.red["500"]} className="absolute z-20 top-3 right-3 invisible group-hover/product-tile:visible" />
                ) : type === PRODUCT_TYPE.COLLECTION ?(
                    <div className="absolute z-20 top-3 left-3">
                        <p className="text-base leading-6 font-bold text-gray-800">{name}</p>
                        <Button onClick={() => onClick?.()} type={ButtonTypes.link} className="bg-transparent py-0">Shop Collection <User6Line color={colors.red["500"]} /></Button>
                    </div>
                ) : null
            }
        </div>
        {
            type === PRODUCT_TYPE.PRODUCTS && (
                <div className="mt-2.5">
                    <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">{name}</p>
                    <div>
                        {smallDescription && <span className="text-xs leading-4 font-normal mt-1.5 text-gray-500">{smallDescription} | </span>}
                        {buttonName && <Button onClick={() => onClick?.()} className="py-0" type={ButtonTypes.link}>{buttonName}</Button>}
                    </div>
                    <p className="text-xs leading-4 font-semibold mt-1.5 text-gray-800">{price}</p>
                </div>
            )
        }
      </div>
  );
}