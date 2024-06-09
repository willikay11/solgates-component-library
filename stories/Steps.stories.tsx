import {Meta, StoryObj} from '@storybook/react';
import {Steps} from '../src';

const meta: Meta = {
  title: 'Data Display/Steps',
  component: Steps,
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: (args) => <div className="h-96">
    <Steps {...args} />
  </div>,
  args: {
    initial: 1,
    labelPlacement: 'horizontal',
    direction: 'horizontal',
    items: [
      {
        title: 'Order Placed',
        description: '12th Dec, 2022 | 10:34 AM',
      },
      {
        title: 'Order Confirmed',
        description: '-',
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
  }
}