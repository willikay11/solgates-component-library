import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, Input, User6Line } from '../src';
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

export const PresetWithSingleDate: Story = {
  args: {
    picker: 'single',
    textProps: {
      placeholder: 'Select date',
    },
    presets: [
      {
        label: 'Yesterday',
        key: 1,
        dates: [new Date(Y, M, D - 1)],
      },
      {
        label: 'Last Week',
        key: 1,
        dates: [new Date(Y, M, D - 7)],
      },
      {
        label: 'Last Month',
        key: 1,
        dates: [new Date(Y, M - 1, D)],
      },
    ],
  },
};

export const PresetWithRangeDate: Story = {
  args: {
    picker: 'range',
    textProps: {
      placeholder: 'Select date',
    },
    presets: [
      {
        label: 'Last 7 Days',
        key: 1,
        dates: [new Date(Y, M, D - 7), new Date(Y, M, D)],
      },
      {
        label: 'Last 14 Days',
        key: 1,
        dates: [new Date(Y, M, D - 14), new Date(Y, M, D)],
      },
      {
        label: 'Last 30 Days',
        key: 1,
        dates: [new Date(Y, M, D - 30), new Date(Y, M, D)],
      },
      {
        label: 'Last 90 Days',
        key: 1,
        dates: [new Date(Y, M, D - 90), new Date(Y, M, D)],
      },
    ],
  },
};
