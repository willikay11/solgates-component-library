import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTypes, notification } from '../src';

const meta: Meta = {
  title: 'Data Display/Notification',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof notification>;

const buttonRender = (args) => <Button {...args} />;
export const Success: Story = {
  render: (args) => buttonRender(args),
  args: {
    type: ButtonTypes.primary,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: `This is a success notification`,
      });
    },
  },
};

export const Error: Story = {
  render: (args) => buttonRender(args),
  args: {
    type: ButtonTypes.danger,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'error',
        title: 'This is a Title',
        message: `This is a error notification`,
      });
    },
  },
};

export const Info: Story = {
  render: (args) => buttonRender(args),
  args: {
    type: ButtonTypes.primary_blue_600,
    ghost: true,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'info',
        title: 'This is a Title',
        message: `This is a info notification`,
      });
    },
  },
};

export const Warning: Story = {
  render: (args) => buttonRender(args),
  args: {
    type: ButtonTypes.primary_blue_600,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'warning',
        title: 'This is a Title',
        message: `This is a warning notification`,
      });
    },
  },
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Button
        type={ButtonTypes.primary}
        block
        onClick={() => {
          notification({
            duration: 5000,
            type: 'success',
            title: 'This is a Title',
            message: `This is a success notification`,
            position: 'topLeft',
          });
        }}
      >
        Top Left
      </Button>

      <Button
        type={ButtonTypes.primary}
        block
        onClick={() => {
          notification({
            duration: 5000,
            type: 'success',
            title: 'This is a Title',
            message: `This is a success notification`,
            position: 'topRight',
          });
        }}
      >
        Top Right
      </Button>

      <Button
        type={ButtonTypes.primary}
        block
        onClick={() => {
          notification({
            duration: 5000,
            type: 'success',
            title: 'This is a Title',
            message: `This is a success notification`,
            position: 'bottomRight',
          });
        }}
      >
        Bottom Right
      </Button>

      <Button
        type={ButtonTypes.primary}
        block
        onClick={() => {
          notification({
            duration: 5000,
            type: 'success',
            title: 'This is a Title',
            message: `This is a success notification`,
            position: 'bottomLeft',
          });
        }}
      >
        Bottom Left
      </Button>
    </div>
  ),
};
