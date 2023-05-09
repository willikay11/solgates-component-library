import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, IconContainerProps, User6Line } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Icon Container',
  component: IconContainer,
};

export default meta;

const Template: Story<IconContainerProps> = (args) => (
  <IconContainer {...args} />
);

export const Default = Template.bind({
  children: <User6Line color={colors.gray[600]} />,
});
