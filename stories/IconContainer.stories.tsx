import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RiAncientPavilionFill } from 'react-icons/ri';
import { IconContainer, IconContainerProps } from "../src";

const meta: Meta = {
    title: 'Data Display/Icon Container',
    component: IconContainer
}

export default meta;

const Template: Story<IconContainerProps> = (args) => <IconContainer {...args} ><RiAncientPavilionFill /></IconContainer>;

export const Default = Template.bind({});