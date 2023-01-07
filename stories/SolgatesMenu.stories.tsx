import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SolgatesMenu, SolgatesMenuProps } from "../src";
import colors from "tailwindcss/colors";
import {RiHeart3Line, RiMenu4Fill, RiSearch2Line, RiShoppingBagLine, RiUser6Line} from "react-icons/ri";

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
            key: 1,
            label: "Men's",
            gap: 4,
            category: [
                {
                    label: 'Shoes',
                    items: [
                        {
                            label: "All men's Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Clothing',
                    items: [
                        {
                            label: "All men's clothing",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All men's accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            key: 2,
            label: "Women's",
            gap: 4,
            category: [
                {
                    label: 'Shoes',
                    items: [
                        {
                            label: "All women's Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Clothing',
                    items: [
                        {
                            label: "All women's clothing",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All women's accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            key: 3,
            label: "Kids",
            gap: 4,
            category: [
                {
                    label: 'Shoes',
                    items: [
                        {
                            label: "All kids' Shoes",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Clothing',
                    items: [
                        {
                            label: "All kids' clothing",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            key: 4,
            label: "Brands",
            gap: 4,
            category: [
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            key: 5,
            label: "Releases",
            gap: 4,
            category: [
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        },
        {
            key: 6,
            label: "Sales",
            gap: 4,
            category: [
                {
                    label: 'Brands',
                    items: [
                        {
                            label: "Jordan",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                },
                {
                    label: 'Accessories',
                    items: [
                        {
                            label: "All kids' accessories",
                            onClick: () => console.log('Clicked')
                        }
                    ]
                }
            ]
        }
    ],
    wishList: {
        icon: <RiHeart3Line className="mr-[10px]" color={colors.gray["600"]} size={14} />,
        content: <p>WishList</p>
    },
    user: {
        icon: <RiUser6Line className="mr-[10px]" color={colors.gray["600"]} size={14} />,
        content: <p>WishList</p>
    },
    cart: {
        icon: <RiShoppingBagLine className="mr-[10px]" color={colors.gray["600"]} size={14} />,
        content: <p>Cart</p>
    },
    searchIcon: <RiSearch2Line className="mr-[10px] lg:hidden" color={colors.gray["600"]} size={18} />,
    mobileMenuIcon: <RiMenu4Fill className="cursor-pointer" />
};