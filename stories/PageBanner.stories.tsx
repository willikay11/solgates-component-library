import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageBanner, PageBannerProps } from "../src";

const meta: Meta = {
    title: 'Data Display/Page Banner',
    component: PageBanner
}

export default meta;

const Template: Story<PageBannerProps> = (args) => <div className="flex flex-row h-96"><PageBanner {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    imageUrl: 'https://www.converse.com.au/media/wysiwyg/EDITORIAL_DESKTOP_3C70_Suede.jpg',
    title: 'Checkout'
}
