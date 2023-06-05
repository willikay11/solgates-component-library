import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageBanner, PageBannerProps } from '../src';

const meta: Meta = {
  title: 'Data Display/Page Banner',
  component: PageBanner,
};

export default meta;

const Template: Story<PageBannerProps> = (args) => (
  <div className="flex flex-row h-32 md:h-64 lg:h-96">
    <PageBanner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'solgates-membership-banner.jpg',
  title: 'Checkout',
  name: 'Children Tees',
  buttonName: 'Shop',
};
