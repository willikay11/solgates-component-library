import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CloseLine, IconContainer, Input, PhoneLine } from '../src';

const meta: Meta = {
  title: 'Data Entry/PhoneNumber',
  component: Input.PhoneNumber,
};
export default meta;

type Story = StoryObj<typeof Input.PhoneNumber>;

export const Default: Story = {
  args: {
    name: 'name',
    placeholder: 'Enter phone number',
    countryCodeDefaultValue: '+254',
    countryCodes: [
      { label: '+254', value: '+254' },
      { label: '+255', value: '+255' },
      { label: '+256', value: '+256' },
    ],
  },
};

export const PrefixIcon: Story = {
  args: {
    name: 'name',
    countryCodeDefaultValue: '+254',
    placeholder: 'Enter phone number',
    countryCodes: [
      { label: '+254', value: '+254' },
      { label: '+255', value: '+255' },
      { label: '+256', value: '+256' },
    ],
    prefixIcon: (
      <IconContainer>
        <PhoneLine size={16} />
      </IconContainer>
    ),
  },
};

export const ClearIcon: Story = {
  args: {
    name: 'name',
    countryCodeDefaultValue: '+254',
    placeholder: 'Enter phone number',
    countryCodes: [
      { label: '+254', value: '+254' },
      { label: '+255', value: '+255' },
      { label: '+256', value: '+256' },
    ],
    prefixIcon: (
      <IconContainer>
        <PhoneLine size={16} />
      </IconContainer>
    ),
    clearIcon: <CloseLine size={16} />,
  },
};

export const Error: Story = {
  args: {
    name: 'name',
    error: 'Please enter phone number',
    countryCodeDefaultValue: '+254',
    placeholder: 'Enter phone number',
    countryCodes: [
      { label: '+254', value: '+254' },
      { label: '+255', value: '+255' },
      { label: '+256', value: '+256' },
    ],
    prefixIcon: (
      <IconContainer>
        <PhoneLine size={16} />
      </IconContainer>
    ),
  },
};
// export const Default = Template.bind({});
// Default.args = {
//   name: 'name',
//   countryCodeDefaultValue: '+256',
//   countryCodes: [
//     { label: '+254', value: '+254' },
//     { label: '+255', value: '+255' },
//     { label: '+256', value: '+256' },
//   ],
//   prefixIcon: (
//     <IconContainer>
//       <User6Line color={colors.red['500']} />
//     </IconContainer>
//   ),
//   suffixIcon: (
//     <IconContainer>
//       <User6Line color={colors.red['500']} />
//     </IconContainer>
//   ),
//   clearIcon: <User6Line color={colors.red['500']} />,
// };
