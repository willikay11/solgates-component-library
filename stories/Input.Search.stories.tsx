import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, IconContainer, Input, User6Line } from '../src';

const meta: Meta = {
  title: 'Data Entry/Search',
  component: Input.Search,
};

export default meta;

type Story = StoryObj<typeof Input.Search>;

export const Default: Story = {
  args: {
    name: 'search',
    placeholder: 'Search anything ...',
    loading: true,
    searchResults: <div>Hello</div>,
    prefixIcon: <User6Line />,
  },
};
