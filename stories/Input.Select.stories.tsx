import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, SelectInputProps, User6Line } from "../src";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Entry/Select',
    component: Input.Select
}

export default meta;

const Template: Story<SelectInputProps> = (args) => <Input.Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    arrowIcon: <User6Line color={colors.gray["600"]} size={18} />,
    selectedIcon: <User6Line color={colors.gray["600"]} size={18} />,
    multiple: true,
    items: [
        {
            label: 'Lucy',
            value: 'lucy',
        },
        {
            label: 'John',
            value: 'john',
        },
        {
            label: 'Joe',
            value: 'joe',
        }
    ]
}