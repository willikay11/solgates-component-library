import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PopOver, PopOverProps } from '../src';

const meta: Meta = {
  title: 'Data Display/Popover',
  component: PopOver,
};

export default meta;

const Template: Story<PopOverProps> = (args) => <PopOver {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <p className="text-xs leading-4 font-normal text-gray-800">Nike Pegasus</p>
  ),
  type: 'primary',
    placement: 'top',
  content: (
    <div className="flex flex-col items-start justify-center">
      <div
        className="text-xs font-normal leading-4 text-white"
        onClick={() => console.log('clicked')}
      >
        Add To Cart
      </div>
    </div>
  ),
};
