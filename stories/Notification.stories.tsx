import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, ButtonTypes } from "../src";
import { notification } from "../src/Notification";

const meta: Meta = {
    title: 'Data Display/Notification',
    component: Button
}

export default meta;

const Template: Story<ButtonProps> = (args) => <>
    <Button {...args} >Show Notification</Button>
</>;

export const Default = Template.bind({});
Default.args = {
    type: ButtonTypes.default,
    block: false,
    loading: false,
    onClick: () => {
        notification({
            duration: 60000,
            type: 'info',
            title: 'This is a Title',
            message: `This is a notification type success`})
    },
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


export const Block = Template.bind({});
Block.args = {
    type: ButtonTypes.primary,
    block: true,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}


export const Primary_Blue = Template.bind({});
Primary_Blue.args = {
    type: ButtonTypes.primary_blue_600,
    block: false,
    loading: false,
    onClick: () => console.log('Button Clicked'),
}
