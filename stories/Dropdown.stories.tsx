import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps, User6Line } from '../src';

const meta: Meta = {
  title: 'Data Display/Dropdown',
  component: Dropdown,
};

export default meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <span
        style={{
          background: 'linear-gradient(5.36deg, #83A4EE 4.29%, #2563EB 96.52%)',
          borderRadius: '50%',
          height: 20,
          width: 20,
          marginRight: 5,
        }}
      />
      <span className="text-xs leading-4 font-normal text-gray-800">
        George Ralak
      </span>
    </>
  ),
  items: [
    {
      label: (
        <span className="inline-flex items-center">
          <User6Line size={14} className="mr-2.5" />
          Log Out
        </span>
      ),
      onClick: () => console.log('log out'),
    },
  ],
};
