import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from "../src";
import {InputErrorProps} from "../src/Input/Error";

const meta: Meta = {
    title: 'Data Entry/Input Error',
    component: Input.Error
}

export default meta;

const Template: Story<InputErrorProps> = (args) => <Input.Error {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'firstName',
    error: "Please enter first name"
}