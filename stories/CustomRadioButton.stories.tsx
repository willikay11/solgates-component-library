import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, CustomRadioButton, CustomRadioButtonProps, User6Line} from "../src";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Entry/Radio Button',
    component: CustomRadioButton
}

export default meta;

const Template: Story<CustomRadioButtonProps> = (args) => <CustomRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Plans',
    options: [{
        leftContent: <div className="flex flex-1">
            <div className="mr-2">
                <IconContainer size="9">
                    <User6Line color={colors.red["500"]} />
                </IconContainer>
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-xs leading-4 font-semibold text-gray-800 mb-1">Ralak & Co.</p>
                <span className="text-xs leading-4 font-semibold text-gray-800">Delivery: <span className="text-xs leading-4 font-light text-gray-400">Today</span></span>
            </div>
        </div>,
        label: 'KES 450',
        value: 'Kes 450'
    }, {
        leftContent: <div className="flex flex-1">
            <div className="mr-2">
                <IconContainer size="9">
                    <User6Line color={colors.red["500"]} />
                </IconContainer>
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-xs leading-4 font-semibold text-gray-800 mb-1">Sendy</p>
                <span className="text-xs leading-4 font-semibold text-gray-800">Delivery: <span className="text-xs leading-4 font-light text-gray-400">Today</span></span>
            </div>
        </div>,
        label: 'KES 500',
        value: 'KES 500'
    }],
    selectedIcon: <User6Line size={18} color={colors.blue["600"]} />,
    unSelectedIcon: <User6Line size={18} color={colors.gray["200"]} />
}