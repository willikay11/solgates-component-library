import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';

const meta: Meta = {
  title: 'Data Entry/Date Picker',
  component: Input.DatePicker,
};

export default meta;

const Template: Story = (args) => <Input.DatePicker />;

export const Default = Template.bind({});
