import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, Input, User6Line} from "../src";
import colors from "tailwindcss/colors";
import {PasswordInputProps} from "../src/Input/Password";

const meta: Meta = {
    title: 'Data Entry/Password',
    component: Input.Password
}

export default meta;

const Template: Story<PasswordInputProps> = (args) => <Input.Password {...args} />;

export const Default = Template.bind({});
Default.args = {
    prefixIcon: <IconContainer><User6Line color={colors.red["500"]} /></IconContainer>,
    iconRender: (visible) => visible ? <User6Line color={colors.red["500"]} /> : <User6Line color={colors.red["500"]} />
}