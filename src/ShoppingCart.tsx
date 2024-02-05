import React, { useEffect, useState } from 'react';
import { PRODUCT_TYPE, ProductTile } from './ProductTile';
import { Input } from './Input';
import { IconContainer } from './IconContainer';
import { DeleteBin5Line, GiftLine } from './Icons';
import colors from './Colors';
import { Button, ButtonTypes } from './Button';
import { Loading } from './Loading';

interface Product {
  id: string;
  cartId: string;
  shop: string;
  name: string;
  imageUrl: string;
  price: number;
  size: string;
  quantity: number;
}

export enum CART_TYPE {
  full = 'full',
  small = 'small',
}

export interface ShoppingCartProps {
  products: Product[];
  onRemoveProduct: (product: Product) => void;
  onCheckOut?: () => void;
  showDiscount?: boolean;
  currency?: string;
  type?: CART_TYPE.full | CART_TYPE.small;
  showCheckoutButton?: boolean;
  loading?: boolean;
  loadingText?: string;
}

export const ShoppingCart = ({
  products,
  onRemoveProduct,
  onCheckOut,
  showDiscount = false,
  currency = 'KSH',
  type = CART_TYPE.full,
  showCheckoutButton = true,
  loading = false,
  loadingText = 'Loading cart items',
}: ShoppingCartProps) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      products?.reduce((total, product) => total + (product.price * product.quantity), 0) || 0
    );
  }, [products]);

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="text-center">
          <Loading fillColor="fill-orange-600" />
          <p className="text-xs leading-7 text-gray-600">{loadingText}</p>
        </div>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id} className="grid gap-2 grid-cols-6 mb-[15px]">
              <div
                className={
                  type === CART_TYPE.small ? 'col-span-2' : 'col-span-1'
                }
              >
                <ProductTile
                  id="1"
                  type={PRODUCT_TYPE.PRODUCT}
                  imageUrl={product?.imageUrl}
                />
              </div>
              <div
                className={
                  type === CART_TYPE.small ? 'col-span-4' : 'col-span-5'
                }
              >
                <p className="text-xs leading-4 font-medium text-gray-800 mt-1.5">
                  {product?.name}
                </p>
                <p className="text-xs leading-4 font-semibold text-gray-800 mt-1.5">
                  {product?.size}
                </p>
                <div className="flex flex-row justify-between items-center mt-1.5">
                  {/*<Input.Number min={1} border='borderless' width="30px" padding="0px" />*/}
                  <span
                    className="cursor-pointer"
                    onClick={() => onRemoveProduct(product)}
                  >
                    <DeleteBin5Line size={16} color={colors.red['500']} />
                  </span>
                  <span className="text-xs leading-4 font-semibold text-gray-800">
                    {currency}{' '}
                    {(product?.price * product.quantity)
                      ?.toString()
                      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
              </div>
              <div className="col-span-6 border-b-[1px] mt-[15px]" />
            </div>
          ))}
          {showDiscount && (
            <Input.Text
              placeholder="Discount Coupon"
              prefixIcon={
                <IconContainer>
                  <GiftLine size={14} color={colors.purple['500']} />
                </IconContainer>
              }
            />
          )}

          <div className="flex justify-between my-[15px]">
            <span className="text-xs leading-4 font-medium text-gray-800">
              Total:&nbsp;
            </span>
            <span className="text-xs leading-4 font-semibold text-black">
              {currency}{' '}
              {total?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </div>

          {showCheckoutButton && (
            <Button
              onClick={() => onCheckOut?.()}
              type={ButtonTypes.primary}
              block
            >
              Checkout
            </Button>
          )}
        </>
      )}
    </div>
  );
};
