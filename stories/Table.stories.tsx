import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Table, TableProps,} from "../src";

const meta: Meta = {
    title: 'Data Display/Table',
    component: Table
}

export default meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
};