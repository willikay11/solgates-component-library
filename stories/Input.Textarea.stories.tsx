import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src';

const meta: Meta = {
  title: 'Data Entry/TextArea',
  component: Input.TextArea,
};

export default meta;

type Story = StoryObj<typeof Input.TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter description',
    rows: 7,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Enter description',
    error: 'Please enter description',
    rows: 7,
  },
};
