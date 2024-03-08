import React from 'react';
import { Button, ButtonTypes } from '../Button';
import { PRODUCT_TYPE } from './index';

interface ProductDescriptionInterface {
  type?: PRODUCT_TYPE;
  // inCart?: boolean;
  buttonName?: string;
  price?: string;
  name?: string;
  smallDescription?: string;
  onClick?: () => void;
  // onAddToCart?: () => void;
  // onRemoveFromCart?: () => void;
  onClickShop?: () => void;
  // addingToCart?: boolean;
}
const ProductDescription = ({
  type,
  // inCart,
  name,
  price,
  smallDescription,
  buttonName,
  // onAddToCart,
  // onRemoveFromCart,
  onClick,
  onClickShop, // addingToCart,
}: ProductDescriptionInterface) => {
  if (type === PRODUCT_TYPE.PRODUCTS || type === PRODUCT_TYPE.CAROUSEL) {
    return (
      <div className="pt-2.5 h-full">
        <p
          className="text-xs leading-4 font-semibold mt-2.5 text-gray-800 text-left cursor-pointer"
          onClick={() => onClick?.()}
        >
          {name}
        </p>
        <div>
          {smallDescription && (
            <span className="text-xs leading-4 font-normal mt-1.5 text-gray-500">
              {smallDescription}
            </span>
          )}

          {buttonName && (
            <>
              <span className="text-xs leading-4 font-normal mt-1.5 text-gray-500">
                &nbsp; |&nbsp;
              </span>
              <Button
                onClick={() => onClickShop?.()}
                className="py-0"
                type={ButtonTypes.link}
              >
                {buttonName}
              </Button>
            </>
          )}
        </div>
        <p className="text-xs leading-4 font-semibold mt-1.5 text-gray-800">
          {price}
        </p>
      </div>
    );
  }

  return null;
};

export default ProductDescription;
