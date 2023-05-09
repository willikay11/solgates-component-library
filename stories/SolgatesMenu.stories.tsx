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
  menus: [
    {
      key: 1,
      label: "Men's",
      gap: 4,
      category: [
        {
          label: 'Shoes',
          items: [
            {
              label: "All men's Shoes",
              onClick: () => console.log('Clicked'),
            },
            {
              label: "All men's Shoes",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Clothing',
          items: [
            {
              label: "All men's clothing",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All men's accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
    },
    {
      key: 2,
      label: "Women's",
      gap: 4,
      category: [
        {
          label: 'Shoes',
          items: [
            {
              label: "All women's Shoes",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Clothing',
          items: [
            {
              label: "All women's clothing",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All women's accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
    },
    {
      key: 3,
      label: 'Kids',
      gap: 4,
      category: [
        {
          label: 'Shoes',
          items: [
            {
              label: "All kids' Shoes",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Clothing',
          items: [
            {
              label: "All kids' clothing",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All kids' accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
    },
    {
      key: 4,
      label: 'Brands',
      gap: 4,
      category: [
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All kids' accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
    },
    {
      key: 5,
      label: 'Releases',
      gap: 4,
      category: [
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All kids' accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
    },
    {
      key: 6,
      label: 'Sales',
      gap: 4,
      category: [
        {
          label: 'Brands',
          items: [
            {
              label: 'Jordan',
              onClick: () => console.log('Clicked'),
            },
          ],
        },
        {
          label: 'Accessories',
          items: [
            {
              label: "All kids' accessories",
              onClick: () => console.log('Clicked'),
            },
          ],
        },
      ],
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
