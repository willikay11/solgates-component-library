import React, { Fragment, ReactNode } from "react";
import { Menu, Transition } from '@headlessui/react'

interface item {
    key: string | number,
    label: string,
    onClick: () => void
}

interface category {
    key: string | number,
    category: string,
    items: item[]
}

export interface DropdownProps {
    label: string,
    menus: category[],
    gap: number,
    dropdownIcon?: ReactNode
}

export const Dropdown = ({ label, dropdownIcon, gap, menus }: DropdownProps) => {
    return (
        <div className="fixed w-full text-right">
            <Menu as="div" className="relative w-full inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center bg-white py-2 text-xs leading-4 font-medium text-gray-800 active:border-b border-orange-600 hover:border-b border-orange-600">
                        {label}
                        {dropdownIcon}
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
                    <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                        <div className={`grid gap-${gap} grid-cols-${menus.length} my-[30px]`}>
                            {
                                menus.map((menu) => (
                                    <div key={menu.key}>
                                        <p className="text-xs leading-4 font-semibold tracking-wider uppercase text-gray-500">{menu.category}</p>
                                        {menu.items.map((item) => (
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
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
