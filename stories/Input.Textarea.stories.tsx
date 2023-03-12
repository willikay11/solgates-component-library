import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from "../src";
import {TextAreaInputProps} from "../src/Input/textarea";

const meta: Meta = {
    title: 'Data Entry/TextArea',
    component: Input.Password
}

export default meta;

const Template: Story<TextAreaInputProps> = (args) => <Input.TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: 7,
}