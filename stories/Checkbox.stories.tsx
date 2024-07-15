import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    label: (
      <label className="text-xs leading-4 text-gray-800 font-normal">
        Checked
      </label>
    ),
    defaultValue: 'checkbox',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    label: (
      <label className="text-xs leading-4 text-gray-800 font-normal">
        Unchecked
      </label>
    ),
    defaultValue: 'checkbox',
  },
};

export const Disabled: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    label: (
      <label className="text-xs leading-4 text-gray-800 font-normal">
        Disabled
      </label>
    ),
    defaultValue: 'checkbox',
    disabled: true,
  },
};

export const DisabledWhenChecked: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    label: (
      <label className="text-xs leading-4 text-gray-800 font-normal">
        Disabled when checked
      </label>
    ),
    defaultValue: 'checkbox',
    disabled: true,
    checked: true,
  },
};
