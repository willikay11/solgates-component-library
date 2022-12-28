import React from 'react';
import { Meta, Story } from '@storybook/react';
import {IconContainer, RadioButton, RadioButtonProps} from "../src";
import {RiCheckboxBlankCircleLine, RiRadioButtonLine, RiShoppingBag2Line} from "react-icons/all";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Entry/Input/Radio Button',
    component: RadioButton
}

export default meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Plans',
    options: [{
        leftContent: <div className="flex">
            <div className="mr-2">
                <IconContainer>
                    <RiShoppingBag2Line color={colors.red["500"]} />
                </IconContainer>
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-xs leading-4 font-semibold text-gray-800 mb-1">Ralak & Co.</p>
                <span className="text-xs leading-4 font-semibold text-gray-800">Delivery: </span><span className="text-xs leading-4 font-light text-gray-400">Today</span>
            </div>
        </div>,
        label: 'KES 450',
        value: 'Kes 450'
    }, {
        leftContent: <div className="flex">
            <div>
                <IconContainer>
                    <RiShoppingBag2Line color={colors.red["500"]} />
                </IconContainer>
            </div>
        </div>,
        label: 'Business',
        value: 'business'
    }],
    selectedIcon: <RiRadioButtonLine size={18} color={colors.blue["600"]} />,
    unSelectedIcon: <RiCheckboxBlankCircleLine size={18} color={colors.gray["200"]} />
}