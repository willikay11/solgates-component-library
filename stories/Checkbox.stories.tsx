import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from "../src";

const meta: Meta = {
    title: 'Data Entry/Input/Checkbox',
    component: Checkbox
}

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'checkbox',
    id: 'checkbox',
    label: <label>Accept terms & conditions</label>
}