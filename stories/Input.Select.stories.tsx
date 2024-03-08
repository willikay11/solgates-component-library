import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input, User6Line, ArrowDownSLine } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Entry/Select',
  component: Input.Select,
};

export default meta;

type Story = StoryObj<typeof Input.Select>;

export const Default: Story = {
  args: {
    prefixIcon: <User6Line color={colors.gray['600']} size={18} />,
    arrowIcon: <ArrowDownSLine color={colors.gray['600']} size={18} />,
    multiple: false,
    items: [
      {
        label: 'Lucy',
        value: 'lucy',
        disabled: true,
      },
      {
        label: 'John',
        value: 'john',
      },
      {
        label: 'Joe',
        value: 'joe',
      },
    ],
  },
};

export const MultiSelect: Story = {
  args: {
    prefixIcon: <User6Line color={colors.gray['600']} size={18} />,
    arrowIcon: <ArrowDownSLine color={colors.gray['600']} size={18} />,
    multiple: true,
    placeholder: 'Select multiple',
    showSearch: true,
    items: [
      {
        label: 'Lucy',
        value: 'lucy',
      },
      {
        label: 'John',
        value: 'john',
      },
      {
        label: 'Joe',
        value: 'joe',
      },
    ],
  },
};

export const ShowSearch: Story = {
  args: {
    prefixIcon: <User6Line color={colors.gray['600']} size={18} />,
    arrowIcon: <ArrowDownSLine color={colors.gray['600']} size={18} />,
    multiple: false,
    showSearch: true,
    placeholder: 'Select one',
    items: [
      {
        label: 'Lucy',
        value: 'lucy',
      },
      {
        label: 'John',
        value: 'john',
      },
      {
        label: 'Joe',
        value: 'joe',
      },
    ],
  },
};

export const Borderless: Story = {
  args: {
    prefixIcon: <User6Line color={colors.gray['600']} size={18} />,
    arrowIcon: <ArrowDownSLine color={colors.gray['600']} size={18} />,
    multiple: false,
    placeholder: 'Select one',
    border: 'borderless',
    items: [
      {
        label: 'Lucy',
        value: 'lucy',
      },
      {
        label: 'John',
        value: 'john',
      },
      {
        label: 'Joe',
        value: 'joe',
      },
    ],
  },
};

export const Error: Story = {
  args: {
    error: 'Please select one person',
    prefixIcon: <User6Line color={colors.gray['600']} size={18} />,
    arrowIcon: <ArrowDownSLine color={colors.gray['600']} size={18} />,
    multiple: false,
    placeholder: 'Select one',
    items: [
      {
        label: 'Lucy',
        value: 'lucy',
      },
      {
        label: 'John',
        value: 'john',
      },
      {
        label: 'Joe',
        value: 'joe',
      },
    ],
  },
};
