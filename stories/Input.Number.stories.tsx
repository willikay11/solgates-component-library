import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';
import { NumberInputProps } from '../src/Input/Number';

const meta: Meta = {
  title: 'Data Entry/Number',
  component: Input.Number,
};

export default meta;

const Template: Story<NumberInputProps> = args => <Input.Number {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: 'Error',
  width: 'w-full',
  padding: 'pl-2 pr-2',
  min: 10,
  max: 20,
};
