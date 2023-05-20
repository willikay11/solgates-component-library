import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, Input, User6Line } from '../src';
import colors from 'tailwindcss/colors';
import { PhoneNumberProps } from '../src/Input/Phonenumber';

const meta: Meta = {
  title: 'Data Entry/PhoneNumber',
  component: Input.Text,
};

export default meta;

const Template: Story<PhoneNumberProps> = (args) => (
  <Input.PhoneNumber {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  countryCodes: [{ label: '+254', value: '+254' }],
  prefixIcon: (
    <IconContainer>
      <User6Line color={colors.red['500']} />
    </IconContainer>
  ),
  suffixIcon: (
    <IconContainer>
      <User6Line color={colors.red['500']} />
    </IconContainer>
  ),
  clearIcon: <User6Line color={colors.red['500']} />,
};
