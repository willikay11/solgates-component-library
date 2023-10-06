import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps, User6Line } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Tags',
  component: Tag,
};

export default meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'John',
  closeIcon: <User6Line color={colors.red['500']} />,
};
