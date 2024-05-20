import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, Input } from '../src';
import { User6Line } from '@willikay11/solgates-component-library';

const meta: Meta = {
  title: 'Data Entry/Date Picker',
  component: Input.DatePicker,
};

export default meta;

type Story = StoryObj<typeof Input.DatePicker>;

export const Date: Story = {
  args: {
    picker: 'single',
    textProps: {
      placeholder: 'Select expiry date',
      clearIcon: <CloseLine size={14} />,
      prefixIcon: <User6Line size={14} />,
    },
  },
};

export const Range: Story = {
  args: {
    picker: 'range',
  },
};
