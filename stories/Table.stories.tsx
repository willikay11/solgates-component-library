import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ArrowRightLine,
  Button,
  ButtonTypes,
  Table,
  TableProps,
  Tag,
} from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Table',
  component: Table,
};

export default meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  tableTitle: 'Recent Orders',
  extraContent: (
    <Button onClick={() => console.log('clicked')} type={ButtonTypes.link}>
      View Orders
    </Button>
  ),
  columns: [
    {
      key: '1',
      title: 'Order ID',
      dataIndex: 'orderId',
    },
    {
      key: '2',
      title: 'Items',
      dataIndex: 'items',
    },
    {
      key: '3',
      title: 'Date/Time',
      dataIndex: 'date',
    },
    {
      key: '4',
      title: 'Customer',
      dataIndex: 'customer',
    },
    {
      key: '5',
      title: 'Payment',
      dataIndex: 'payment',
      render: (val) => (
        <Tag tagColor="bg-red-100" textColor="text-red-500" text={val} />
      ),
    },
    {
      key: '6',
      title: 'Delivery Status',
      dataIndex: 'status',
      render: (val) => <Tag text={val} />,
    },
    {
      key: '7',
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      key: '8',
      title: 'Action',
      dataIndex: 'action',
      render: () => <ArrowRightLine size={14} color={colors.gray['500']} />,
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
      action: '...',
    },
    {
      orderId: 'AQ90123',
      items: '2',
      date: '32 mins ago',
      customer: 'William Kamau',
      payment: 'Unpaid',
      status: 'Pending',
      amount: 'KSH 84,131.00',
      action: '...',
    },
    {
      orderId: 'AQ90123',
      items: '2',
      date: '32 mins ago',
      customer: 'William Kamau',
      payment: 'Unpaid',
      status: 'Pending',
      amount: 'KSH 84,131.00',
      action: '...',
    },
    {
      orderId: 'AQ90123',
      items: '2',
      date: '32 mins ago',
      customer: 'William Kamau',
      payment: 'Unpaid',
      status: 'Pending',
      amount: 'KSH 84,131.00',
      action: '',
    },
  ],
};
