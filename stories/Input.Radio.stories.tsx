import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Input, RadioButtonProps} from "../src";

const meta: Meta = {
    title: 'Data Entry/Radio',
    component: Input.RadioButton
}

export default meta;

const Template: Story<RadioButtonProps> = (args) => <Input.RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Through Mpesa",
    id: "mpesa",
    value: "mpesa",
    name: "mpesa"
}