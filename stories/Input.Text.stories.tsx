import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, IconContainer, Input, User6Line } from '../src';

const meta: Meta = {
  title: 'Data Entry/Text',
  component: Input.Text,
};

export default meta;

type Story = StoryObj<typeof Input.Text>;

export const Default: Story = {
  args: {
    name: 'name',
    placeholder: 'First Name',
  },
};

export const PrefixIcon: Story = {
  args: {
    name: 'name',
    placeholder: 'First Name',
    prefixIcon: (
      <IconContainer>
        <User6Line size={14} />
      </IconContainer>
    ),
  },
};

export const SuffixIcon: Story = {
  args: {
    name: 'name',
    placeholder: 'First Name',
    suffixIcon: (
      <IconContainer>
        <User6Line size={14} />
      </IconContainer>
    ),
  },
};

export const clearIcon: Story = {
  args: {
    name: 'name',
    placeholder: 'First Name',
    clearIcon: <CloseLine size={14} />,
  },
};

export const error: Story = {
  args: {
    name: 'name',
    placeholder: 'First Name',
    error: 'Please enter first name',
  },
};
