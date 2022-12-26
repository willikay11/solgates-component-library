import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from "../src";

const meta: Meta = {
    title: 'Data Display/Tabs',
    component: Tabs
}

export default meta;

const Template: Story = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {};