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
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
    type: 'default',
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
    prefixIcon: <IconContainer><RiAncientPavilionFill color="#DB4437" /></IconContainer>
}

export const Block = Template.bind({});
Block.args = {
    type: 'primary',
    block: true,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}
