import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, Input, TextInputProps, User6Line } from "../src";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Entry/Text',
    component: Input.Text
}

export default meta;

const Template: Story<TextInputProps> = (args) => <Input.Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "name",
    error: "Error",
    prefixIcon: <IconContainer><User6Line color={colors.red["500"]} /></IconContainer>,
    suffixIcon: <IconContainer><User6Line color={colors.red["500"]} /></IconContainer>,
    clearIcon: <User6Line color={colors.red["500"]} />
}