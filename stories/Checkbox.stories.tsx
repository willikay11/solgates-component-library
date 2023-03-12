import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from "../src";

const meta: Meta = {
    title: 'Data Entry/Checkbox',
    component: Checkbox
}

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'checkbox',
    id: 'checkbox',
    label: <label className="text-xs leading-4 text-gray-800 font-normal">Accept terms & conditions</label>,
    disabled: false,
}