import { Meta, StoryObj } from '@storybook/react';
import { Heart3Line, IconContainer, Input } from '../src';
import React from 'react';

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
