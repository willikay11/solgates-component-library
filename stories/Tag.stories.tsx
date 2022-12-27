import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from "../src";
import { RiCloseLine } from "react-icons/all";

const meta: Meta = {
    title: 'Data Display/Tags',
    component: Tag
}

export default meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'John',
    closeIcon: <RiCloseLine />
};