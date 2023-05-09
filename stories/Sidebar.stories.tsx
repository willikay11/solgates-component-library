import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar, SidebarProps, User6Line } from '../src';

const meta: Meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
};

export default meta;

const Template: Story<SidebarProps> = (args) => (
  <div className="h-screen grid grid-cols-12 gap-4">
    <div className="col-span-2">
      <Sidebar {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  selectedMenuKey: '2',
  menus: [
    {
      key: '1',
      title: 'Dashboard',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '2',
      title: 'Order/Sales',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '3',
      title: 'Products',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '4',
      title: 'Bids',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '5',
      title: 'Customers',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '6',
      title: 'Categories & Brands',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
    {
      key: '7',
      title: 'Shops/Sellers',
      icon: <User6Line size={14} />,
      onClick: () => console.log('clicked'),
    },
  ],
};
