import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SolgatesMenu, SolgatesMenuProps } from "../src";

const meta: Meta = {
    title: 'Navigation/Solgates Menu',
    component: SolgatesMenu
}

export default meta;

const Template: Story<SolgatesMenuProps> = (args) => <SolgatesMenu {...args}/>;

export const Default = Template.bind({});
Default.args = {
    logoUrl: "https://user-images.githubusercontent.com/19513808/210572075-f131c86f-8117-4d0e-b839-ec79fdae516c.svg",
    menus: [
        {
            label: "Men's",
            gap: 4,
            category: [
                {
                    key: '1',
                    label: 'Shoes',
                    items: [
                        {
                            key: '1',
                            label: "All men's Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Clothing',
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
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All men's accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            label: "Women's",
            gap: 4,
            category: [
                {
                    key: '1',
                    label: 'Shoes',
                    items: [
                        {
                            key: '1',
                            label: "All women's Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Clothing',
                    items: [
                        {
                            key: '1',
                            label: "All women's clothing",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All women's accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            label: "Kids",
            gap: 4,
            category: [
                {
                    key: '1',
                    label: 'Shoes',
                    items: [
                        {
                            key: '1',
                            label: "All kids' Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Clothing',
                    items: [
                        {
                            key: '1',
                            label: "All kids' clothing",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            label: "Brands",
            gap: 4,
            category: [
                {
                    key: '3',
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            label: "Releases",
            gap: 4,
            category: [
                {
                    key: '3',
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            label: "Sales",
            gap: 4,
            category: [
                {
                    key: '3',
                    label: 'Brands',
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
                    label: 'Accessories',
                    items: [
                        {
                            key: '1',
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        }
    ]
};