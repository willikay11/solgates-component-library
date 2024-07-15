import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonTypes,
  InformationBanner,
  InformationBannerProps,
} from '../src';

const meta: Meta = {
  title: 'Data Display/Information Banner',
  component: InformationBanner,
};

export default meta;

const Template: Story<InformationBannerProps> = (args) => (
  <div className="w-full h-52">
    <InformationBanner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  leftContent: (
    <div className="flex flex-col items-start justify-center h-full flex-1">
      <p className="text-white uppercase text-[40px] font-black w-[300px] leading-9">
        become a member now
      </p>
      <p className="text-white text-xs leading-4 font-medium mt-[5px]">
        Sign up for free. Join the community. Be the first on new deals.
      </p>
      <Button
        onClick={() => console.log('click')}
        className="h-[36px] mt-[5px] text-white font-semibold shadow-md"
        type={ButtonTypes.default}
      >
        Join Us
      </Button>
    </div>
  ),
  rightContent: (
    <div className="flex items-center justify-center h-full">
      <img src="https://user-images.githubusercontent.com/19513808/211192682-1813a3eb-c581-4cc9-9e0f-8e6da1f68b04.svg" />
    </div>
  ),
};
