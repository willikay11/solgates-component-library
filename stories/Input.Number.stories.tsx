import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, NumberInputProps } from "../src";

const meta: Meta = {
    title: 'Data Entry/Input/Number',
    component: Input.Number
}

export default meta;

const Template: Story<NumberInputProps> = (args) => <Input.Number {...args} />;

export const Default = Template.bind({});
Default.args = {
    min: 10,
    max: 20
}