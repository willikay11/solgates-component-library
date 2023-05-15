import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, Statistics, StatisticsProps, User6Line } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Statistics',
  component: Statistics,
};

export default meta;

const Template: Story<StatisticsProps> = args => <Statistics {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Account Summary',
  stats: [
    {
      span: 2,
      icon: (
        <IconContainer bgColor="bg-blue-50">
          <User6Line size={14} color={colors.blue['500']} />
        </IconContainer>
      ),
      title: 'Total Sales(Ksh)',
      value: '87,450.39',
    },
    {
      span: 2,
      icon: (
        <IconContainer bgColor="bg-blue-50">
          <User6Line size={14} color={colors.blue['500']} />
        </IconContainer>
      ),
      title: 'Items',
      value: '8',
    },
    {
      span: 2,
      icon: (
        <IconContainer bgColor="bg-blue-50">
          <User6Line size={14} color={colors.blue['500']} />
        </IconContainer>
      ),
      title: 'Deliveries Made',
      value: '812',
    },
    {
      span: 4,
      icon: (
        <IconContainer bgColor="bg-blue-50">
          <User6Line size={14} color={colors.blue['500']} />
        </IconContainer>
      ),
      title: 'Best Performing Shop',
      value: 'Vans & Chuck taylors',
    },
    {
      span: 2,
      icon: (
        <IconContainer bgColor="bg-blue-50">
          <User6Line size={14} color={colors.blue['500']} />
        </IconContainer>
      ),
      title: 'All Customers',
      value: '312',
    },
  ],
};
