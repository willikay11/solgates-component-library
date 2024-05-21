import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, Input } from '../src';
import { User6Line } from '@willikay11/solgates-component-library';
const now = new Date();
const M = now.getMonth();
const Y = now.getFullYear();
const D = now.getDate();

const meta: Meta = {
  title: 'Data Entry/Date Picker',
  component: Input.DatePicker,
};

export default meta;

type Story = StoryObj<typeof Input.DatePicker>;

export const DatePicker: Story = {
  args: {
    picker: 'single',
    textProps: {
      placeholder: 'Select expiry date',
      clearIcon: <CloseLine size={14} />,
      prefixIcon: <User6Line size={14} />,
    },
  },
};

export const RangePicker: Story = {
  args: {
    picker: 'range',
  },
};

export const DisabledDate: Story = {
  args: {
    picker: 'single',
    disabledDate: new Date(Y, M, D - 1),
    textProps: {
      placeholder: 'Select date',
    },
  },
};
