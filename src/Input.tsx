import React, { ReactNode, useState, Fragment } from "react";
import { Listbox, Transition } from '@headlessui/react'

export interface PasswordInputProps {
    iconRender: (visible: boolean) => ReactNode,
    prefixIcon?: ReactNode;
}

const Password = ({ prefixIcon, iconRender }: PasswordInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center">
            {prefixIcon && <div>{prefixIcon}</div>}
            <input type={isPasswordVisible ? 'text' : "password"} className="ml-2 outline-0 w-full" />
            {iconRender && <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{iconRender(isPasswordVisible)}</div>}
        </div>
    );
};

export interface TextAreaInputProps {
    rows: number;
}

const TextArea = ({ rows }: TextAreaInputProps) => {
    return (
        <textarea className="w-full p-2.5 rounded bg-white border border-gray-200 outline-0 focus:border-orange-500 hover:border-orange-500" rows={rows} />
    );
}

export interface NumberInputProps {
    min: number;
    max: number;
    prefixIcon?: ReactNode;
}

const Number = ({ min, max, prefixIcon }: NumberInputProps) => {
    return (
      <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center">
        {prefixIcon && <div>{prefixIcon}</div>}
        <input type="number" min={min} max={max} className="ml-2 outline-0 w-full" />
      </div>
    );
}

export interface TextInputProps {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    clearIcon?: ReactNode;
}

const Text = ({ prefixIcon, suffixIcon, clearIcon }: TextInputProps) => {
    const [currentText, setCurrentText] = useState<string>('');
    return (
        <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center">
            {prefixIcon && <div>{prefixIcon}</div>}
            <input type="text" value={currentText} onChange={(e) => setCurrentText(e.target.value)} className="ml-2 outline-0 w-full" />
            {suffixIcon && !clearIcon && <div>{suffixIcon}</div>}
            {clearIcon && <div className="cursor-pointer" onClick={() => setCurrentText('')} >{clearIcon}</div>}
        </div>
    );
}

interface selectItem {
    label: string,
    value: string,
    disabled?: boolean,
}
export interface SelectInputProps {
    items: selectItem[],
    arrowIcon: ReactNode,
    selectedIcon: ReactNode,
}
const Select = ({ items, arrowIcon, selectedIcon }: SelectInputProps) => {
    const [selectedItem, setSelectedItem] = useState<selectItem>(items[0]);
    return (
        <Listbox onChange={(value) => {
            const foundItem = items.filter(item => item.value === value);
            if (foundItem) {
                setSelectedItem(foundItem[0]);
            }
        }}>
            <div className="relative w-full">
                <Listbox.Button className="relative w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left border border-gray-200 hover:border-orange-500 focus:border-orange-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedItem?.label}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        {arrowIcon}
                    </span>
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
                                        active ? 'bg-orange-200 text-orange-600' : 'text-gray-900'
                                    }`
                                }
                                value={item.value}
                                disabled={item.disabled || false}
                            >
                                {({ selected }) => (
                                    <>
                                      <span
                                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
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

export const Input = {
    Password: Password,
    TextArea: TextArea,
    Number: Number,
    Text: Text,
    Select: Select
};