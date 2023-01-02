import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from "../src";
import { RiArrowDownSLine } from "react-icons/all";

const meta: Meta = {
    title: 'Navigation/Dropdown',
    component: Dropdown
}

export default meta;

const Template: Story<DropdownProps> = () =>
    <Dropdown
        label="Men's"
        gap={4}
        menus={[
            {
                key: '1',
                category: 'Shoes',
                items: [
                    {
                        key: '1',
                        label: "All men's Shoes",
                        onClick: () => console.log('Clicked')
                    }
                ]
            },{
                key: '2',
                category: 'Clothing',
                items: [
                    {
                        key: '1',
                        label: "All men's clothing",
                        onClick: () => console.log('Clicked')
                    }
                ]
            },
            {
                key: '3',
                category: 'Brands',
                items: [
                    {
                        key: '1',
                        label: "Jordan",
                        onClick: () => console.log('Clicked')
                    }
                ]
            },
            {
                key: '4',
                category: 'Accessories',
                items: [
                    {
                        key: '1',
                        label: "All men's accessories",
                        onClick: () => console.log('Clicked')
                    }
                ]
            }
        ]}
    />;

export const Default = Template.bind({});
Default.args = {
    dropdownIcon: <RiArrowDownSLine />
};