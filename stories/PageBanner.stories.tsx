import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconContainer, PageBanner, PageBannerProps, User6Line } from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Page Banner',
  component: PageBanner,
};

export default meta;

const Template: Story<PageBannerProps> = (args) => (
  <div className="flex flex-row h-96 md:h-64 lg:h-96">
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

export const Content = Template.bind({});
Content.args = {
  content: (
    <div className="h-full w-full bg-orange-100 rounded-[5px] border-dashed border-orange-600 border-[1px] flex flex-1 items-center cursor-pointer">
      <div className="flex flex-col items-center justify-center w-full">
        <IconContainer borderRadius="rounded-full" bgColor="bg-orange-200">
          <User6Line color={colors.orange['600']} />
        </IconContainer>
        <p className="text-xs leading-4 font-normal text-orange-600 text-center mt-2.5">
          Got a plug you would like us to add? Please share their details
        </p>
      </div>
    </div>
  ),
};
