import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EyeCloseLine, EyeLine, IconContainer, Input, User6Line } from '../src';

const meta: Meta = {
  title: 'Data Entry/Password',
  component: Input.Password,
};

export default meta;

type Story = StoryObj<typeof Input.Password>;
export const Default: Story = {
  args: {
    prefixIcon: (
      <IconContainer>
        <User6Line size={14} />
      </IconContainer>
    ),
    iconRender: (visible) =>
      visible ? <EyeCloseLine size={14} /> : <EyeLine size={14} />,
  },
};

export const Error: Story = {
  args: {
    error: 'Passwords do not match',
    prefixIcon: (
      <IconContainer>
        <User6Line size={14} />
      </IconContainer>
    ),
    iconRender: (visible) =>
      visible ? <EyeCloseLine size={14} /> : <EyeLine size={14} />,
  },
};
