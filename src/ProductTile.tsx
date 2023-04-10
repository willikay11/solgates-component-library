// @ts-nocheck
import React, {useState} from "react";
import Img, { CloudimageProvider } from "react-cloudimage-responsive";
import colors from "./Colors";
import { Button, ButtonTypes } from "./Button";
import {Heart3Line, Heart3LineFill, ArrowRightLine} from './Icons';

const cloudImageConfig = {
    token: 'cyqqqhlxia',
    baseURL: 'https://cyqqqhlxia.cloudimg.io/_solgates_/'
};

export enum PRODUCT_TYPE {
   PRODUCTS = 'products',
   PRODUCT = 'product',
   COLLECTION = 'collection',
   RELEASES = 'releases'
}

export interface ProductTileProps {
  imageUrl: string;
  id: string;
  type?: PRODUCT_TYPE.PRODUCTS | PRODUCT_TYPE.PRODUCT | PRODUCT_TYPE.COLLECTION | PRODUCT_TYPE.RELEASES;
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
}

export const ProductTile = ({ id, imageUrl, type = PRODUCT_TYPE.PRODUCTS, name, buttonName, smallDescription, price, addedToWishList, onClick, onClickShop, releaseDate, onAddToWishList, onRemoveFromWishlist }: ProductTileProps) => {
    return(
      <div className={`group/product-tile w-full ${type === PRODUCT_TYPE.COLLECTION ? 'h-full' : 'h-auto'}  rounded`}>
        <div className={`w-full ${type === PRODUCT_TYPE.COLLECTION ? 'h-full' : 'h-auto'} relative rounded bg-gray-100 flex justify-center items-center cursor-pointer`} onClick={() => onClick?.()}>
            <CloudimageProvider config={cloudImageConfig}>
                <Img src={imageUrl} doNotReplaceURL alt="Demo image" />
            </CloudimageProvider>
            {
                type === PRODUCT_TYPE.PRODUCTS? (addedToWishList ?
                        <div onClick={() => onAddToWishList?.(id)}>
                            <Heart3LineFill size={14} color={colors.red["500"]} className="absolute z-20 top-3 right-3" />
                        </div>
                        :
                        <Heart3Line size={14} color={colors.red["500"]} className="absolute z-20 top-3 right-3 invisible group-hover/product-tile:visible" onClick={() => onRemoveFromWishlist?.()} />
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