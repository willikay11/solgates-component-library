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
  menus: [
    {
      name: "Men's",
      id: '996ac3ee-def4-4224-a0c9-e52b9603daad',
      query: 'gender=men_1',
      weight: 0,
      active: 1,
      count: 0,
      attributeId: 2,
      referenceAttributes: ['996ac3ec-5a67-430d-9f99-3784e3bcf645'],
      children: [
        {
          name: 'Shoes',
          id: '996ac3ee-e123-4507-9d8b-3bba65fe01b2',
          query: 'gender=men_1&category=shoes',
          weight: 0,
          active: 1,
          count: 0,
          attributeId: 6,
          referenceAttributes: ['996ac3ec-5d7e-459e-8f71-a026205e60c9'],
          children: [
            {
              name: 'All Shoes',
              id: '996ac3ee-e5c0-49e1-98fb-b4f527871a57',
              query:
                'gender=men_1&category=shoes&category_type=sneakers,vans,sandals',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [
                '996ac3ee-d7d1-4f93-92fc-0851f9f56291',
                '996ac3ee-d863-4b5b-885c-29fcff5b1050',
                '996ac3ee-d8c7-4c5b-9fa0-3745617f4eae',
              ],
            },
            {
              name: 'Sneakers',
              id: '996ac3ee-e87f-45d0-9411-973619aa3254',
              query: 'gender=men_1&category=shoes&category_type=sneakers',
              weight: 1,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: ['996ac3ee-d7d1-4f93-92fc-0851f9f56291'],
            },
            {
              name: 'Vans',
              id: '996ac3ee-e9c7-4d74-9af3-357933a2db13',
              query: 'gender=men_1&category=shoes&category_type=vans',
              weight: 2,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: ['996ac3ee-d863-4b5b-885c-29fcff5b1050'],
            },
            {
              name: 'Sandals',
              id: '996ac3ee-eaeb-427e-9d7f-97e178507751',
              query: 'gender=men_1&category=shoes&category_type=sandals',
              weight: 3,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: ['996ac3ee-d8c7-4c5b-9fa0-3745617f4eae'],
            },
          ],
        },
        {
          name: 'Clothing',
          id: '996ac3ee-e2a2-4fd4-92f4-23a7a2fc10f6',
          query: 'gender=men_1&category=clothing',
          weight: 1,
          active: 1,
          count: 0,
          attributeId: 6,
          referenceAttributes: ['996ac3ec-f584-47e2-ad2e-581fc5486b29'],
          children: [
            {
              name: 'All Clothing',
              id: '996ac3ee-ecee-4819-87da-fa8de47d4a49',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'T-shirts',
              id: '996ac3ee-edb7-4d94-9ef2-9f3b8cbcd0df',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Hoodies',
              id: '996ac3ee-ee87-4af8-8d91-80a115fee6ab',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Shorts',
              id: '996ac3ee-ef08-4c79-9219-cb85800ec6df',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Trousers',
              id: '996ac3ee-ef9a-499a-a072-58481c812058',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Jerseys',
              id: '996ac3ee-f025-4d6f-a2f1-e13735da1143',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Jacket',
              id: '996ac3ee-f0b1-41d8-8285-2058c35f1fdf',
              query: '',
              weight: 4,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
          ],
        },
        {
          name: 'Brands',
          id: '997aa837-3056-413d-8307-1632dbb461c5',
          query: '',
          weight: 2,
          active: 1,
          count: 0,
          attributeId: 1,
          referenceAttributes: [],
          children: [
            {
              name: 'Nike',
              id: '9992643b-a743-468b-a519-790d702e5534',
              query: '&brand=nike',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 1,
              referenceAttributes: ['996ac3ec-506a-4bc0-899b-36eb885f43d2'],
            },
            {
              name: 'Puma',
              id: '99926451-17c7-43c9-bc35-533451053327',
              query: '&brand=puma',
              weight: 1,
              active: 1,
              count: 0,
              attributeId: 1,
              referenceAttributes: ['996ac3ec-510b-4ee5-8bb4-eff375e5174e'],
            },
            {
              name: 'Adidas',
              id: '99926476-f26f-45bf-97a9-8a23b6b5f384',
              query: '&brand=adidas',
              weight: 2,
              active: 1,
              count: 0,
              attributeId: 1,
              referenceAttributes: ['996ac3ec-51b0-4d88-8de2-0118bef45993'],
            },
          ],
        },
        {
          name: 'Accessories',
          id: '996ac3ee-e3c9-4c3e-8f72-07558f124351',
          query: 'gender=men_1&category=accessories',
          weight: 3,
          active: 1,
          count: 0,
          attributeId: 6,
          referenceAttributes: ['996ac3ed-0f48-4bf3-8b50-ce36a6535ee4'],
          children: [
            {
              name: 'All Accessories',
              id: '996ac3ee-f20a-4594-8c7c-2578f2b8d19a',
              query: '',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Bags',
              id: '996ac3ee-f2bb-4865-a9db-4b26d4e21445',
              query: '',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Backpacks',
              id: '996ac3ee-f357-4601-b895-928b81e339ed',
              query: '',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
            },
            {
              name: 'Backpacks',
              id: '996ac3ee-f40b-4dff-a60d-b21dba7cfa36',
              query: '',
              weight: 0,
              active: 1,
              count: 0,
              attributeId: 4,
              referenceAttributes: [],
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
