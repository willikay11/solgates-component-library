import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, SelectInputProps } from "../src";
import {RiArrowDownSLine, RiCheckFill} from "react-icons/all";

const meta: Meta = {
    title: 'Data Entry/Input/Select',
    component: Input.Select
}

export default meta;

const Template: Story<SelectInputProps> = (args) => <Input.Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    arrowIcon: <RiArrowDownSLine size={18} />,
    selectedIcon: <RiCheckFill size={18} />,
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