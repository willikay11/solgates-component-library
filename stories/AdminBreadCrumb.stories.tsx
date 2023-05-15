import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BreadCrumbs, BreadCrumbsProps } from '../src';

const meta: Meta = {
  title: 'Data Display/Admin Bread Crumbs',
  component: BreadCrumbs.admin,
};

export default meta;

const Template: Story<BreadCrumbsProps> = (args) => (
  <BreadCrumbs.admin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Orders/Sales',
      active: false,
      onClick: () => console.log('clicked 1'),
    },
    {
      title: 'A0B1C003',
      active: true,
      onClick: () => console.log('clicked'),
    },
  ],
};
