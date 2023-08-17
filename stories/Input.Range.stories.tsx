import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';
import {RangeProps} from "../src/Input/Range";

const meta: Meta = {
  title: 'Data Entry/Range Slider',
  component: Input.Range,
};

export default meta;

const Template: Story<RangeProps> = (args) => <Input.Range {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 100,
  step: 1
};
