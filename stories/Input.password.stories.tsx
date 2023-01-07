import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, Input, PasswordInputProps} from "../src";
import {RiEyeCloseLine, RiEyeLine, RiPlaneFill} from "react-icons/all";

const meta: Meta = {
    title: 'Data Entry/Password',
    component: Input.Password
}

export default meta;

const Template: Story<PasswordInputProps> = (args) => <Input.Password {...args} />;

export const Default = Template.bind({});
Default.args = {
    prefixIcon: <IconContainer><RiPlaneFill /></IconContainer>,
    iconRender: (visible) => visible ? <RiEyeLine /> : <RiEyeCloseLine />
}