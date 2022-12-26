import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, IconContainer } from "../src";
import { RiAncientPavilionFill } from "react-icons/ri";

const meta: Meta = {
    title: 'General/Button',
    component: Button
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Click Me!</Button>;

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    ghost: true,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
    prefixIcon: <IconContainer><RiAncientPavilionFill color="#DB4437" /></IconContainer>
}