import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, Input, InputProps} from "../src";
import {RiPlaneFill} from "react-icons/all";

const meta: Meta = {
    title: 'Data Entry/Input',
    component: Input
}

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    prefixIcon: <IconContainer><RiPlaneFill /></IconContainer>
}