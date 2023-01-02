import React from "react";
import {Button, ButtonTypes} from "./Button";

export interface ProductTileProps {
  imageUrl: string;
  name?: string;
  shop?: string;
  price?: string;
}
export const ProductTile = ({ imageUrl, name, shop, price }: ProductTileProps) => {
  return(
      <div className="w-full h-full cursor-pointer">
        <div className="w-full h-full rounded bg-gray-100 flex justify-center items-center">
          <img src={imageUrl} />
        </div>
        <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">{name}</p>
        <p className="text-xs leading-4 font-normal mt-1.5 text-gray-500">Dutch Green | <Button onClick={() => console.log('clicked')} className="py-0" type={ButtonTypes.link}>{shop}</Button></p>
        <p className="text-xs leading-4 font-semibold mt-1.5 text-gray-800">{price}</p>
      </div>
  );
}