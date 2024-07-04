import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IconContainer, User6Line } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Icon Container',
  component: IconContainer,
};

export default meta;

type Story = StoryObj<typeof IconContainer>;
export const Default: Story = {
  render: (args) => (
    <IconContainer {...args}>
      <User6Line color={colors.green['600']} />
    </IconContainer>
  ),
};

export const Rounded: Story = {
  render: (args) => (
    <IconContainer {...args}>
      <User6Line color={colors.green['600']} />
    </IconContainer>
  ),
  args: {
    borderRadius: 'rounded-full',
  },
};

export const BackgroundColor: Story = {
  render: (args) => (
    <IconContainer {...args}>
      <User6Line color={colors.green['600']} />
    </IconContainer>
  ),
  args: {
    borderRadius: 'rounded-full',
    bgColor: 'bg-green-50',
  },
};

export const Size: Story = {
  render: (args) => (
    <IconContainer {...args}>
      <User6Line color={colors.green['600']} />
    </IconContainer>
  ),
  args: {
    size: '24',
    borderRadius: 'rounded-full',
    bgColor: 'bg-green-50',
  },
};
