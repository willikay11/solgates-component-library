import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    label: (
      <label className="text-xs leading-4 text-gray-800 font-normal">
        Accept terms & conditions
      </label>
    ),
    disabled: false,
    defaultValue: 'checkbox',
    defaultChecked: true,
  }
};
