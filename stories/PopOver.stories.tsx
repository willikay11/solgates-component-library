import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, ButtonTypes, PopOver, PopOverProps, User6Line} from "../src";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Display/Popover',
    component: PopOver
}

export default meta;

const Template: Story<PopOverProps> = (args) => <PopOver {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <User6Line size={14} color={colors.red["500"]} />,
    content:  <div className="flex flex-col items-start">
        <Button
            type={ButtonTypes.link}
            onClick={() => console.log('clicked')}
            prefixIcon={<User6Line size={14} color={colors.red["500"]} />}
        >
            Accept the highest bid
        </Button>
        <div className="mt-2">
            <Button
                type={ButtonTypes.link}
                onClick={() => console.log('clicked')}
                prefixIcon={<User6Line size={14} color={colors.red["500"]} />}
            >
                View All bids
            </Button>
        </div>
    </div>
};