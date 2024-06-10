import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card, CART_TYPE, ShoppingCart } from '../src';

const meta: Meta = {
  title: 'Data Display/Shopping Cart',
  component: ShoppingCart,
};

export default meta;
type Story = StoryObj<typeof ShoppingCart>;
export const Default = {
  render: (args) => (
    <div className="w-96">
      <Card>
        <ShoppingCart {...args} />
      </Card>
    </div>
  ),
  args: {
    products: [
      {
        id: '1',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
      {
        id: '2',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
      {
        id: '3',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
    ],
    showDiscount: true,
    deliveryCosts: 400,
    discountCosts: 100,
  },
};

export const Small = {
  render: (args) => (
    <div className="w-96">
      <Card>
        <ShoppingCart {...args} />
      </Card>
    </div>
  ),
  args: {
    type: CART_TYPE.small,
    products: [
      {
        id: '1',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
      {
        id: '2',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
      {
        id: '3',
        name: 'Jordans',
        imageUrl:
          'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
        size: '8.5',
        price: 20000,
        quantity: '1',
      },
    ],
    showDiscount: false,
    deliveryCosts: 400,
    discountCosts: 100,
  },
};
