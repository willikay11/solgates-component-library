import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonTypes,
  CART_TYPE,
  IconContainer,
  ShoppingCart,
  SolgatesMenu,
  SolgatesMenuProps,
  User6Line,
} from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Navigation/Solgates Menu',
  component: SolgatesMenu,
};

export default meta;

const Template: Story<SolgatesMenuProps> = (args) => <SolgatesMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoUrl:
    'https://user-images.githubusercontent.com/19513808/210572075-f131c86f-8117-4d0e-b839-ec79fdae516c.svg',
  onLogoClick: () => console.log('Clicked logo'),
  phoneNumber: '+254 706020966',
  userName: 'William Kamau Kamuyu',
  isLoggedIn: true,
  shopName: 'Sugggggggggggggggggar',
  menus: [
    {
      name: 'Men',
      id: '9a406960-0130-4afe-91fc-4c3aa5b76e50',
      query: 'gender=male',
      isPage: false,
      weight: 0,
      active: 1,
      count: 0,
      attributeId: 2,
      referenceAttributes: ['9a40695f-4d30-4f2a-99c2-2543144f81a1'],
      children: [
        {
          name: 'Shoes',
          id: '9a406960-03b5-4050-bdca-681c643e3b1f',
          query: 'gender=male&',
          isPage: false,
          weight: 0,
          active: 1,
          count: 0,
          attributeId: 6,
          children: [
            {
              name: 'All Shoes',
              id: '9a406960-0983-4480-ae4d-52d3295a143a',
              query: 'gender=male&&',
              isPage: false,
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Sneakers',
              id: '9a406960-0d45-4ba7-9162-59779a87b422',
              query: 'gender=male&&',
              isPage: false,
              weight: 1,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Vans',
              id: '9a406960-0eac-4d9d-90f9-ae3ef11f59c8',
              query: 'gender=male&&',
              isPage: false,
              weight: 2,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Sandals',
              id: '9a406960-101f-4996-86ae-f3ad99d250d7',
              query: 'gender=male&&',
              isPage: false,
              weight: 3,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
          ],
        },
        {
          name: 'Clothing',
          id: '9a406960-0595-41bf-9d1c-cc0d2a0d9892',
          query: 'gender=male&',
          isPage: false,
          weight: 1,
          active: 1,
          count: 0,
          attributeId: 6,
          children: [
            {
              name: 'All Clothing',
              id: '9a406960-126b-459e-9c1b-7d12b58503d7',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'T-shirts',
              id: '9a406960-1320-434c-a03c-26ed7c259b99',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Hoodies',
              id: '9a406960-13d4-420e-a1a5-1d0a3ad59d54',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Shorts',
              id: '9a406960-145f-4893-b24c-37ff319fb1af',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Trousers',
              id: '9a406960-1521-4b97-88ef-a5109d4cda41',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Jerseys',
              id: '9a406960-15c0-44c0-bb98-4e820ec83586',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Jacket',
              id: '9a406960-166b-4867-b3e2-81dd3139e717',
              query: 'gender=male&&',
              isPage: false,
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
          ],
        },
        {
          name: 'Accessories',
          id: '9a406960-070c-4e27-af08-0e475378e38b',
          query: 'gender=male&',
          isPage: false,
          weight: 2,
          active: 1,
          count: 0,
          attributeId: 6,
          children: [
            {
              name: 'All Accessories',
              id: '9a406960-17ff-4c10-af8c-acc27eb19bb6',
              query: 'gender=male&&',
              isPage: false,
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Bags',
              id: '9a406960-18b0-4a30-87d5-6942fbb5aa7c',
              query: 'gender=male&&',
              isPage: false,
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Backpacks',
              id: '9a406960-1941-41f1-b361-30d2a2879c16',
              query: 'gender=male&&',
              isPage: false,
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
            {
              name: 'Backpacks',
              id: '9a406960-19fc-4bbd-9bd3-57b17805af99',
              query: 'gender=male&&',
              isPage: false,
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Women',
      id: '9abe49f5-8d6b-4750-99d5-ad7349447927',
      query: 'gender=female',
      isPage: false,
      weight: 1,
      active: 1,
      count: 0,
      attributeId: 2,
      referenceAttributes: ['9a40695f-4dc8-484c-a71e-7b1f0fd3196a'],
      children: [],
    },
    {
      name: 'Kids',
      id: '9abe4a1a-0c85-4a55-84fe-156fa91355e9',
      query: 'gender=kids',
      isPage: false,
      weight: 2,
      active: 1,
      count: 0,
      attributeId: 2,
      referenceAttributes: ['9a40695f-4e69-470d-8a93-3f2d9a753963'],
      children: [],
    },
    {
      name: 'Shops',
      id: '9abe4a5c-6949-498d-af7d-e9054fa550af',
      query: '/shops',
      isPage: true,
      weight: 3,
      active: 1,
      count: 0,
      attributeId: 6,
      referenceAttributes: [],
      children: [],
    },
  ],
  userContent: (
    <div className="flex flex-col">
      <Button
        onClick={() => console.log('clicked')}
        style={{
          justifyContent: 'start',
          color: colors.gray['800'],
          marginBottom: 5,
        }}
        type={ButtonTypes.link}
        prefixIcon={
          <IconContainer>
            <User6Line size={14} color={colors.green['500']} />
          </IconContainer>
        }
      >
        My Account
      </Button>

      <Button
        onClick={() => console.log('clicked')}
        style={{
          justifyContent: 'start',
          color: colors.gray['800'],
          marginBottom: 5,
        }}
        type={ButtonTypes.link}
        prefixIcon={
          <IconContainer>
            <User6Line size={14} color={colors.green['500']} />
          </IconContainer>
        }
      >
        My Account
      </Button>

      <Button
        onClick={() => console.log('clicked')}
        style={{
          justifyContent: 'start',
          color: colors.gray['800'],
          marginBottom: 5,
        }}
        type={ButtonTypes.link}
        prefixIcon={
          <IconContainer>
            <User6Line size={14} color={colors.green['500']} />
          </IconContainer>
        }
      >
        My Account
      </Button>

      <Button
        onClick={() => console.log('clicked')}
        style={{
          justifyContent: 'start',
          color: colors.gray['800'],
          marginBottom: 5,
        }}
        type={ButtonTypes.link}
        prefixIcon={
          <IconContainer>
            <User6Line size={14} color={colors.green['500']} />
          </IconContainer>
        }
      >
        My Account
      </Button>
    </div>
  ),
  onClickMenuItem: (menu) => console.log(menu),
  onClickWishList: () => console.log('clicked wishlist'),
  onOpenShopClick: () => console.log('clicked open shop'),
  shoppingCartContent: (
    <div>
      <ShoppingCart
        products={[
          {
            id: '1',
            name: 'Jordans',
            imageUrl:
              'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
            size: 'Size 8.5',
            price: 'KES 20,000',
            quantity: '1',
          },
          {
            id: '2',
            name: 'Jordans',
            imageUrl:
              'https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg',
            size: 'Size 8.5',
            price: 'KES 20,000',
            quantity: '1',
          },
        ]}
        type={CART_TYPE.small}
      />
    </div>
  ),
};
