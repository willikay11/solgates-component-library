import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, Input, TextInputProps } from "../src";
import { RiCloseCircleLine, RiEdit2Line, RiPlaneFill } from "react-icons/all";

const meta: Meta = {
    title: 'Data Entry/Text',
    component: Input.Text
}

export default meta;

const Template: Story<TextInputProps> = (args) => <Input.Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    prefixIcon: <IconContainer><RiPlaneFill /></IconContainer>,
    suffixIcon: <IconContainer><RiEdit2Line /></IconContainer>,
    clearIcon: <RiCloseCircleLine />
}