import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from "../src";

const meta: Meta = {
    title: 'Data Display/Card',
    component: Card
}

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} ><span>Card content</span></Card>;

export const Default = Template.bind({});
Default.args = {
    title: <div className="border-b-[1px] mb-1">Card title</div>
};