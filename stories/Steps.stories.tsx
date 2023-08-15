import React from 'react';
import { Meta, Story } from '@storybook/react';
import Steps, { StepsProps } from '../src/Steps';

const meta: Meta = {
  title: 'Data Display/Steps',
  component: Steps,
};

export default meta;

const Template: Story<StepsProps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});

Default.args = {
  initial: 1,
  labelPlacement: 'vertical',
  items: [
    {
      title: 'Order Placed',
      description: '12th Dec, 2022 | 10:34 AM',
    },
    {
      title: 'Order Confirmed',
      description: '12th Dec, 2022 | 10:38 AM',
    },
    {
      title: 'Delivery',
      description: '-',
    },
    {
      title: 'Delivered',
      description: '-',
    },
  ],
};
