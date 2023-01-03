import React from "react";
import {PRODUCT_TYPE, ProductTile} from "./ProductTile";
import {Input} from "./Input";
import {IconContainer} from "./IconContainer";
import {RiGift2Line} from "react-icons/all";
import colors from "tailwindcss/colors";
import {Button, ButtonTypes} from "./Button";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    size: string;
    quantity: string;
}

export interface ShoppingCartProps {
    products: Product[],
}
export const ShoppingCart = ({ products }: ShoppingCartProps) => {
  return (
      <div className="flex flex-col">
          {
              products.map((product) => (
                  <div key={product.id} className="grid gap-2 grid-cols-6 mb-[15px]">
                      <div className="col-span-1">
                          <ProductTile type={PRODUCT_TYPE.PRODUCT} imageUrl={product?.imageUrl} />
                      </div>
                      <div className="col-span-5">
                          <p className="text-xs leading-4 font-medium text-gray-800 mt-1.5">{product?.name}</p>
                          <p className="text-xs leading-4 font-semibold text-gray-800 mt-1.5">{product?.size}</p>
                          <div className="flex flex-row justify-between mt-1.5">
                              <span>{product?.quantity}</span>
                              <span className="text-xs leading-4 font-semibold text-black">{product?.price}</span>
                          </div>
                      </div>
                      <div className="col-span-6 border-b-[1px] mt-[15px]" />
                  </div>
              ))
          }
          <Input.Text placeholder="Discount Coupon" prefixIcon={<IconContainer><RiGift2Line color={colors.purple["500"]} /></IconContainer>} />
          <div className="flex justify-between mt-[15px]">
              <span className="text-xs leading-4 font-medium text-gray-800">Subtotal: </span>
              <span className="text-xs leading-4 font-semibold text-black">KSH 26,000 </span>
          </div>

          <div className="flex justify-between mt-[5px]">
              <span className="text-xs leading-4 font-medium text-gray-800">Discount (5%): </span>
              <span className="text-xs leading-4 font-semibold text-black">KSH 6,000 </span>
          </div>

          <div className="flex justify-between my-[15px]">
              <span className="text-xs leading-4 font-medium text-gray-800">Total: </span>
              <span className="text-xs leading-4 font-semibold text-black">KSH 20,000 </span>
          </div>

          <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Checkout</Button>
      </div>
  );
}