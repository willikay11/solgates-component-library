import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BreadCrumbs, BreadCrumbsProps } from '../src';

const meta: Meta = {
  title: 'Data Display/Normal Bread Crumbs',
  component: BreadCrumbs.normal,
};

export default meta;

const Template: Story<BreadCrumbsProps> = args => (
  <BreadCrumbs.normal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Mens',
      active: false,
      onClick: () => console.log('clicked'),
    },
    {
      title: 'Shoes',
      active: true,
      onClick: () => console.log('clicked'),
    },
  ],
};
