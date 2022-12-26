import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps} from "../src";

const meta: Meta = {
    title: 'General/Button',
    component: Button
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Click Me!</Button>;

export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    ghost: false,
    block: true,
    loading: false,
    onClick: () => console.log('Button Clicked')
}