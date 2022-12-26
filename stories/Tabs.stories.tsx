import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps } from "../src";

const meta: Meta = {
    title: 'Data Display/Tabs',
    component: Tabs
}

export default meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultActiveKey: 2,
    items: [
        { label: 'Tab 1', content: <p>Content 1</p>},
        { label: 'Tab 2', content: <p>Content 2</p>},
        { label: 'Tab 3', content: <p>Content 3</p>},
    ],
    onChange: (activeKey: number) => console.log('Active key: ', activeKey),
};