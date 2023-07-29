import React from 'react';
import { Meta, Story } from '@storybook/react';
import {CONTENT_POSITION, IconContainer, PageBanner, PageBannerProps, User6Line} from '../src';
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
  imageUrl: 'solgates-membership-banner.jpg',
  type: 'backgroundImage',
  title: 'Checkout',
  name: 'Children Tees',
  buttonName: 'Shop',
  contentPosition: CONTENT_POSITION.center,
  content: <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png" width="80px" height="90px" className="rounded mr-2.5" alt="test" />
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
