import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps, PRODUCT_TYPE, ProductTile } from '../src';

const meta: Meta = {
  title: 'Data Display/List',
  component: List,
};

export default meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Top Selling Products',
  items: [
    {
      leftContent: (
        <div className="inline-flex items-center">
          <div style={{ height: 50, width: 50 }}>
            <ProductTile
              imageUrl="https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
              type={PRODUCT_TYPE.PRODUCT}
            />
          </div>
          <span className="ml-2.5 text-xs leading-4 font-normal text-gray-800">
            Hoodies
          </span>
        </div>
      ),
      rightContent: (
        <div className="inline-flex items-center">
          <span className="text-xs leading-4 font-normal text-gray-800">
            62,123
          </span>
        </div>
      ),
    },
    {
      leftContent: (
        <div className="inline-flex items-center">
          <div style={{ height: 50, width: 50 }}>
            <ProductTile
              imageUrl="https://secure-images.nike.com/is/image/DotCom/DZ2523_001?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
              type={PRODUCT_TYPE.PRODUCT}
            />
          </div>
          <span className="ml-2.5 text-xs leading-4 font-normal text-gray-800">
            Hoodies
          </span>
        </div>
      ),
      rightContent: (
        <div className="inline-flex items-center">
          <span className="text-xs leading-4 font-normal text-gray-800">
            62,123
          </span>
        </div>
      ),
    },
  ],
};
