import React from "react";
import {Meta, StoryObj} from '@storybook/react';
import {CONTENT_POSITION, PageBanner} from '../src';

const meta: Meta = {
  title: 'Data Display/Page Banner',
  component: PageBanner,
};

type Story = StoryObj<typeof PageBanner>;
export default meta;

export const Image: Story = {
  args: {
    type: 'image',
    imageUrl: 'https://cyqqqhlxia.cloudimg.io/_solgates_/solgates-hero-v2.jpg',
    name: 'Children Tees',
    buttonName: 'Shop',
    showOverlay: true,
    placeholderHeight: 'h-56'
  }
}

export const BackgroundImage: Story = {
  args: {
    type: 'backgroundImage',
    imageUrl: 'https://cyqqqhlxia.cloudimg.io/_solgates_/solgates-hero-v2.jpg',
    name: 'Children Tees',
    buttonName: 'Shop',
    showOverlay: true,
    placeholderHeight: 'h-56',
    backgroundImageClassName: 'h-40'
  }
}

export const withOutOverlay: Story = {
  args: {
    type: 'image',
    imageUrl: 'https://cyqqqhlxia.cloudimg.io/_solgates_/solgates-hero-v2.jpg',
    showOverlay: false,
    placeholderHeight: 'h-56',
  }
}

export const withContent: Story = {
  args: {
    type: 'image',
    imageUrl: 'https://cyqqqhlxia.cloudimg.io/_solgates_/solgates-hero-v2.jpg',
    showOverlay: true,
    placeholderHeight: 'h-56',
    content: <span className="text-white text-lg">Checkout</span>,
    contentPosition: CONTENT_POSITION.center
  }
}
