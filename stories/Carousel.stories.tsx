import React from 'react';
import { Meta, Story } from '@storybook/react'
import {Carousel, CarouselProps} from "../src";

const meta: Meta = {
    title: 'Data Display/Carousel',
    component: Carousel
}

export default meta;

const Template: Story<CarouselProps> = (args) =>
    <div className="w-full">
        <Carousel {...args} />
    </div>;

export const Default = Template.bind({});
Default.args = {}