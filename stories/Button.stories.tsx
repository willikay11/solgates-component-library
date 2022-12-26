import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Button, ButtonProps, ButtonTypes, IconContainer} from "../src";
import {RiAddFill, RiAncientPavilionFill} from "react-icons/ri";

const meta: Meta = {
    title: 'General/Button',
    component: Button
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Click Me!</Button>;

export const Default = Template.bind({});
Default.args = {
    type: ButtonTypes.default,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const Primary = Template.bind({});
Primary.args = {
    type: ButtonTypes.primary,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const Danger = Template.bind({});
Danger.args = {
    type: ButtonTypes.danger,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
    type: ButtonTypes.default,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
    prefixIcon: <IconContainer><RiAncientPavilionFill color="#DB4437" /></IconContainer>
}

export const Block = Template.bind({});
Block.args = {
    type: ButtonTypes.primary,
    block: true,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}

export const Link = Template.bind({});
Link.args = {
    type: ButtonTypes.link,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
    prefixIcon: <RiAddFill />
}

export const Primary_Blue = Template.bind({});
Primary_Blue.args = {
    type: ButtonTypes.primary_blue_600,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}