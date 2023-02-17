import React from "react";
import {PRODUCT_TYPE, ProductTile} from "./ProductTile";
import {Input} from "./Input";
import {IconContainer} from "./IconContainer";
import { User6Line } from "./Icons";
import colors from "./Colors"
import {Button, ButtonTypes} from "./Button";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    size: string;
    quantity: string;
}

export enum CART_TYPE {
    full = 'full',
    small = 'small'
}

export interface ShoppingCartProps {
    products: Product[],
    showDiscount?: boolean,
    type?: CART_TYPE.full | CART_TYPE.small,
    showCheckoutButton?: boolean,
}

export const ShoppingCart = ({ products, showDiscount = false, type = CART_TYPE.full, showCheckoutButton = true }: ShoppingCartProps) => {
  return (
      <div className="flex flex-col">
          {
              products.map((product) => (
                  <div key={product.id} className="grid gap-2 grid-cols-6 mb-[15px]">
                      <div className={type === CART_TYPE.small ? 'col-span-2' : 'col-span-1'}>
                          <ProductTile type={PRODUCT_TYPE.PRODUCT} imageUrl={product?.imageUrl} />
                      </div>
                      <div className={type === CART_TYPE.small ? 'col-span-4' : 'col-span-5'}>
                          <p className="text-xs leading-4 font-medium text-gray-800 mt-1.5">{product?.name}</p>
                          <p className="text-xs leading-4 font-semibold text-gray-800 mt-1.5">{product?.size}</p>
                          <div className="flex flex-row justify-between items-center">
                              <Input.Number min={1} border='borderless' padding="0px" />
                              <span className="text-xs leading-4 font-semibold text-black">{product?.price}</span>
                          </div>
                      </div>
                      <div className="col-span-6 border-b-[1px] mt-[15px]" />
                  </div>
              ))
          }
          { showDiscount && <Input.Text placeholder="Discount Coupon" prefixIcon={<IconContainer><User6Line color={colors.purple["500"]} /></IconContainer>} /> }
          <div className="flex justify-between mt-[15px]">
              <span className="text-xs leading-4 font-medium text-gray-800">Subtotal: </span>
              <span className="text-xs leading-4 font-semibold text-black">KSH 26,000 </span>
          </div>

          {/*<div className="flex justify-between mt-[5px]">*/}
          {/*    <span className="text-xs leading-4 font-medium text-gray-800">Discount (5%): </span>*/}
          {/*    <span className="text-xs leading-4 font-semibold text-black">KSH 6,000 </span>*/}
          {/*</div>*/}

          <div className="flex justify-between my-[15px]">
              <span className="text-xs leading-4 font-medium text-gray-800">Total: </span>
              <span className="text-xs leading-4 font-semibold text-black">KSH 20,000 </span>
          </div>

          { showCheckoutButton && <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Checkout</Button> }
      </div>
  );
}