import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {
  ArrowRightLine, Database,
  Table,
  Tag,
} from '../src';
import colors from 'tailwindcss/colors';
import {notification} from "@willikay11/solgates-component-library";

const meta: Meta = {
  title: 'Data Display/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    tableTitle: 'Recent Orders',
    columns: [
      {
        key: '1',
        title: 'Order ID',
        dataIndex: 'orderId',
        visible: false,
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
    total: 4,
  }
};

export const NoContent: Story = {
  args: {
    tableTitle: 'Recent Orders',
    columns: [
      {
        key: '1',
        title: 'Order ID',
        dataIndex: 'orderId',
        visible: false,
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
    data: [],
    noContent: (
        <div className="flex flex-col items-center justify-center">
          <Database size={48} color={colors.gray["800"]} />
          <p className="text-xs text-gray-800">No Data</p>
        </div>
    )
  }
};

export const NoPagiantion: Story = {
  args: {
    tableTitle: 'Recent Orders',
    columns: [
      {
        key: '1',
        title: 'Order ID',
        dataIndex: 'orderId',
        visible: false,
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
    showPagination: false
  }
};

export const Borderless: Story = {
  args: {
    tableTitle: 'Recent Orders',
    columns: [
      {
        key: '1',
        title: 'Order ID',
        dataIndex: 'orderId',
        visible: false,
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
    total: 4,
    border: "borderless",
  }
};

export const PageSizeChange: Story = {
  args: {
    tableTitle: 'Recent Orders',
    columns: [
      {
        key: '1',
        title: 'Order ID',
        dataIndex: 'orderId',
        visible: false,
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
    total: 4,
    onPageSizeChange:(pageSize) =>       notification({
      type: 'success',
      title: 'Page size changed',
      message: `New page size: ${pageSize}`,
    }),
  }
};
