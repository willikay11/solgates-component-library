import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import {RiUser6Line, RiHeart3Line, RiShoppingBagLine, RiSearch2Line, RiMenu4Fill} from "react-icons/ri";
import { Input } from "./Input";
import colors from "tailwindcss/colors";

interface item {
    key: string | number,
    label: string,
    onClick: () => void
}

interface category {
    key: string | number,
    label: string,
    items: item[]
}

interface menu {
    label: string;
    gap: number,
    category: category[]
}

export interface SolgatesMenuProps {
    logoUrl: string;
    menus: menu[],
}

export const SolgatesMenu = ({ menus, logoUrl }: SolgatesMenuProps) => {
    return (
        <div className="fixed relative w-full h-[60px] md:h-[120px] lg:h-[120px] items-center border-b border-gray-100">
            <div className="bg-gray-100 flex py-[2px] lg:grid lg:grid-cols-12 w-full">
                <div className="md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-8 flex w-full items-center justify-center md:justify-end lg:justify-end">
                    <span className="text-[10px] text-gray-600 mr-2">Help</span>
                    <span className="text-[10px] text-gray-600 mr-2">Open Shop</span>
                </div>
            </div>
            <div className="hidden md:grid lg:grid grid-cols-12 w-full" style={{ height: 'calc(120px - 20px)'}}>
                <div className="md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-6 inline-flex">
                    <img src={logoUrl} className="w-[90px] mr-[30px]" />
                    {
                        menus.map((menu) =>
                            <Menu as="div" className="inline-flex text-left mr-[20px] h-full">
                                <div>
                                    <Menu.Button className="inline-flex justify-center items-center h-full bg-white py-2 text-xs leading-4 font-medium text-gray-800 active:border-b border-orange-600 hover:border-b border-orange-600">
                                        {menu.label}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 top-[114px] mt-2 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                                        <div className={`grid grid-cols-12 my-[30px]`}>
                                            <div className="md:col-start-2 md:col-span-9 lg:col-start-3 lg:col-span-8 inline-flex">
                                                <div className={`grid gap-${menu?.gap} grid-cols-4 w-full`}>
                                                    {
                                                        menu?.category?.map((category) => (
                                                            <div key={category.key}>
                                                                <p className="text-xs leading-4 font-semibold tracking-wider uppercase text-gray-500">{category.label}</p>
                                                                {category.items.map((item) => (
                                                                    <Menu.Item key={item.key}>
                                                                        <button className="text-xs leading-4 font-medium text-gray-800 hover:underline" onClick={item.onClick}>
                                                                            {item.label}
                                                                        </button>
                                                                    </Menu.Item>
                                                                ))}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )
                    }
                </div>
                <div className="col-span-2 inline-flex items-center justify-end">
                    <RiUser6Line className="mr-[10px]" color={colors.gray["600"]} size={18} />
                    <RiHeart3Line className="mr-[10px]" color={colors.gray["600"]} size={18} />
                    <RiShoppingBagLine className="mr-[10px]" color={colors.gray["600"]} size={18} />
                    <RiSearch2Line className="mr-[10px] lg:hidden" color={colors.gray["600"]} size={18} />
                    <Input.Text
                        className="md:hidden lg:block h-[36px] rounded-[68px] w-[135px] bg-gray-50"
                        placeholder="Search"
                        prefixIcon={<RiSearch2Line color={colors.gray["400"]} />}
                    />
                </div>
            </div>
            <div className="flex md:hidden lg:hidden items-center h-[40px]">
                <div className="flex flex-1">
                    <RiMenu4Fill />
                </div>
                <div className="flex flex-1 justify-center">
                    <img src={logoUrl} className="w-[60px]" />
                </div>
                <div className="flex flex-1 justify-end">
                    <RiUser6Line className="mr-[10px]" color={colors.gray["600"]} size={14} />
                    <RiHeart3Line className="mr-[10px]" color={colors.gray["600"]} size={14} />
                    <RiShoppingBagLine className="mr-[10px]" color={colors.gray["600"]} size={14} />
                    <RiSearch2Line color={colors.gray["600"]} size={14} />
                </div>
            </div>
        </div>
    )
}
