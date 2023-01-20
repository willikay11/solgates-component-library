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
    tableTitle: 'Recent Orders',
    columns: [
        {
            key: '1',
            title: 'Order ID',
            dataIndex: 'orderId'
        },
        {
            key: '2',
            title: 'Items',
            dataIndex: 'items'
        },
        {
            key: '3',
            title: 'Date/Time',
            dataIndex: 'date'
        },
        {
            key: '4',
            title: 'Customer',
            dataIndex: 'customer'
        },
        {
            key: '5',
            title: 'Payment',
            dataIndex: 'payment'
        },
        {
            key: '6',
            title: 'Delivery Status',
            dataIndex: 'status'
        },
        {
            key: '7',
            title: 'Amount',
            dataIndex: 'amount'
        },
        {
            key: '8',
            title: 'Action',
            dataIndex: 'action'
        },
    ],
    data: [
        {
            orderId: 'AQ90123',
            items: '2',
            date: '32 mins ago',
            customer: 'William Kamau',
            payment: 'Unpaid',
            status: 'Pending',
            amount: 'KSH 84,131.00',
            action: '...'
        },
    ]
};