import { Meta, StoryObj } from '@storybook/react';
import { AddLine, Heart3Line, IconContainer, Input, Minus } from '../src';
import colors from '../src/Colors';

const meta: Meta = {
  title: 'Data Entry/Number',
  component: Input.Number,
};

export default meta;

type Story = StoryObj<typeof Input.Number>;

export const Default: Story = {
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
  },
};

export const MinAndMax: Story = {
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    min: 1,
    max: 20,
  },
};

export const PrefixIcon: Story = {
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    prefixIcon: (
      <IconContainer>
        <Heart3Line size={14} />
      </IconContainer>
    ),
  },
};

export const Borderless: Story = {
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    border: 'borderless',
  },
};

export const error: Story = {
  args: {
    error: 'Please enter number',
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
  },
};

export const custom: Story = {
  args: {
    border: 'borderless',
    error: 'Please enter number',
    name: 'number',
    width: 'w-[15px]',
    defaultValue: '1',
    min: 1,
    centered: true,
    minIcon: (
      <div className="h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]">
        <Minus color={colors.gray['800']} size={12} />
      </div>
    ),
    maxIcon: (
      <div className="h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]">
        <AddLine color={colors.gray['800']} size={12} />
      </div>
    ),
  },
};
