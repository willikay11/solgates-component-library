import React from 'react';
import { PopOver, PopOverType } from '../PopOver';
import { Button, ButtonTypes } from '../Button';

interface ProductDescriptionInterface {
  inCart?: boolean;
  buttonName?: string;
  price?: string;
  name?: string;
  smallDescription?: string;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
  onClickShop?: () => void;
  addingToCart?: boolean;
}
const ProductDescription = ({
  inCart,
  name,
  price,
  smallDescription,
  buttonName,
  onAddToCart,
  onRemoveFromCart,
  onClickShop,
  addingToCart,
}: ProductDescriptionInterface) => {
  return (
    <div className="pt-2.5 h-full bg-white">
      {onAddToCart || onRemoveFromCart ? (
        <PopOver
          type={inCart ? PopOverType.danger : PopOverType.primary}
          placement="top"
          content={
            <div className="flex flex-col items-start justify-center">
              <Button
                onClick={() =>
                  inCart ? onRemoveFromCart?.() : onAddToCart?.()
                }
                loading={addingToCart}
                type={ButtonTypes.text}
                className="bg-transparent text-white"
              >
                {inCart ? 'Remove' : 'Add To Cart'}
              </Button>
            </div>
          }
        >
          <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">
            {name}
          </p>
        </PopOver>
      ) : (
        <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">
          {name}
        </p>
      )}
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
};

export default ProductDescription;
