import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BreadCrumbs, BreadCrumbsProps } from "../src";

const meta: Meta = {
    title: 'Data Display/Bread Crumbs',
    component: BreadCrumbs
}

export default meta;

const Template: Story<BreadCrumbsProps> = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Mens',
        active: false
    }, {
        title: 'Shoes',
        active: true
    }]
};