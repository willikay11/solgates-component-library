import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, Input, InputProps, TextTypes} from "../src";
import {RiPlaneFill} from "react-icons/all";

const meta: Meta = {
    title: 'Data Entry/Input',
    component: Input
}

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: TextTypes.number,
    prefixIcon: <IconContainer><RiPlaneFill /></IconContainer>
}