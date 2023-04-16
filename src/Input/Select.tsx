import React, {Fragment, ReactNode, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {Tag} from "../Tag";

interface selectItem {
    label: string,
    value: string,
    disabled?: boolean,
}

export interface SelectInputProps {
    items: selectItem[],
    arrowIcon: ReactNode,
    selectedIcon: ReactNode,
    prefixIcon?: ReactNode;
    multiple?: boolean,
    name?: string;
    value?: string;
}

export const Select = ({ items, arrowIcon, selectedIcon, multiple = false, prefixIcon, value, name }: SelectInputProps) => {
    const [selectedItem, setSelectedItem] = useState<selectItem>(items[0]);
    const [multipleSelectedItems, setMultipleSelectedItem] = useState<selectItem[]>([]);
    return (
        <Listbox multiple={multiple} name={name} value={value} onChange={(value: any) => {
            if (multiple) {
                const selectedItems: [string] = value;
                const foundItems: selectItem[] = [];
                selectedItems.forEach(selectedItem => {
                    const foundItem = items.filter(item => item.value === selectedItem);
                    foundItems.push(foundItem[0]);
                });
                setMultipleSelectedItem(foundItems);
            } else {
                const foundItem = items.filter(item => item.value === value);
                if (foundItem) {
                    setSelectedItem(foundItem[0]);
                }
            }
        }}>
            <div className="relative w-full">
                <Listbox.Button className="relative h-[3.125rem] w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left border border-gray-200 hover:border-orange-500 focus:border-orange-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300  invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:text-sm">
                    {
                        multiple ? (
                            multipleSelectedItems.map(selectedItem => <Tag text={selectedItem.label} />)
                        ) : (
                            <>
                                {prefixIcon}
                                <span className="ml-2 truncate">{selectedItem?.label}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    {arrowIcon}
                                </span>
                            </>
                        )
                    }
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {items.map((item) => (
                            <Listbox.Option
                                key={item.value}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-orange-100 text-orange-600' : 'text-gray-900'
                                    }`
                                }
                                value={item.value}
                                disabled={item.disabled || false}
                            >
                                {({ selected }) => (
                                    <>
                                      <span
                                          className={`block truncate ${selected ? 'font-medium text-orange-600' : 'font-normal'}`}
                                      >
                                        {item.label}
                                      </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600">
                                              {selectedIcon}
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}