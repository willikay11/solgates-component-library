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
  <div className="flex flex-row h-48">
    <PageBanner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://cyqqqhlxia.cloudimg.io/_solgates_/solgates-hero-v2.jpg',
  name: 'Children Tees',
  buttonName: 'Shop',
  showOverlay: false,
  placeholderHeight: 'h-56',
};

export const Content = Template.bind({});
Content.args = {
  content: (
    <div className="h-80 w-full bg-orange-100 rounded-[5px] border-dashed border-orange-600 border-[1px] flex flex-1 items-center cursor-pointer">
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
