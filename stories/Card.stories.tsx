import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, ButtonTypes, Card, CardProps, IconContainer, Input} from "../src";
import {User6Line} from "../src";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Display/Card',
    component: Card
}

export default meta;

const Template: Story<CardProps> = (args) =>
    <div className="sm:w-full md:w-full lg:w-96 xl:w-72 2xl:w-64">
        <Card {...args} />
    </div>;

export const Default = Template.bind({});
Default.args = {
    title: "Card title",
    children: <div className="w-full">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2">
            <Input.Text placeholder="First Name" prefixIcon={<IconContainer><User6Line color={colors.green["500"]} /></IconContainer>} />
            <Input.Text placeholder="Last Name" prefixIcon={<IconContainer><User6Line color={colors.green["500"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-2">
            <Input.Text placeholder="Region" prefixIcon={<IconContainer><User6Line color={colors.blue["500"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-2">
            <Input.Text placeholder="Apartment/Office" prefixIcon={<IconContainer><User6Line color={colors.cyan["500"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-2">
            <Input.Text placeholder="Phone" prefixIcon={<IconContainer><User6Line color={colors.blue["500"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-2">
            <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Save & Continue</Button>
        </div>
    </div>
};