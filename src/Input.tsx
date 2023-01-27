import React, {Fragment, ReactNode, useState, useRef} from "react";
import {Listbox, Transition} from '@headlessui/react'
import {Tag} from "./Tag";
import {Button, ButtonTypes} from "./Button";
import {AddLine, Minus} from "./Icons";
import Colors from "./Colors";

export interface PasswordInputProps {
    iconRender: (visible: boolean) => ReactNode,
    prefixIcon?: ReactNode;
    placeholder?: string;
}

const Password = ({ prefixIcon, iconRender, placeholder }: PasswordInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center">
            {prefixIcon && <div className="flex">{prefixIcon}</div>}
            <input
                type={isPasswordVisible ? 'text' : "password"}
                placeholder={placeholder}
                className="ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800"
            />
            {iconRender && <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{iconRender(isPasswordVisible)}</div>}
        </div>
    );
};

export interface TextAreaInputProps {
    rows: number;
    placeholder?: string;
}

const TextArea = ({ rows, placeholder }: TextAreaInputProps) => {
    return (
        <textarea
            placeholder={placeholder}
            className="w-full p-2.5 rounded bg-white border border-gray-200 outline-0 focus:border-orange-500 hover:border-orange-500 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800"
            rows={rows}
        />
    );
}

export interface NumberInputProps {
    min?: number;
    max?: number;
    prefixIcon?: ReactNode;
    placeholder?: string;
}

const Number = ({ min, max, prefixIcon, placeholder }: NumberInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const increase = () => {
        inputRef?.current?.stepUp();
    }

    const decrease = () => {
        inputRef?.current?.stepDown();
    }
    return (
      <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center">
        {prefixIcon && <div className="flex">{prefixIcon}</div>}
        <Button onClick={() => decrease()} type={ButtonTypes.link}><Minus color={Colors.gray["500"]} size={14} /></Button>
        <input
            ref={inputRef}
            type="number"
            placeholder={placeholder}
            min={min}
            max={max}
            className="ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800" />
          <Button onClick={() => increase()} type={ButtonTypes.link}><AddLine color={Colors.gray["800"]} size={14} /></Button>
      </div>
    );
}

export interface TextInputProps {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    clearIcon?: ReactNode;
    placeholder?: string;
    className?: string;
}

const Text = ({ prefixIcon, suffixIcon, clearIcon, placeholder, className }: TextInputProps) => {
    const [currentText, setCurrentText] = useState<string>('');
    return (
        <div className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center ${className}`}>
            {prefixIcon && <div className="flex">{prefixIcon}</div>}
            <input
                type="text"
                placeholder={placeholder}
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
                className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800`}
            />
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
    prefixIcon?: ReactNode;
    multiple?: boolean,
}

const Select = ({ items, arrowIcon, selectedIcon, multiple = false, prefixIcon }: SelectInputProps) => {
    const [selectedItem, setSelectedItem] = useState<selectItem>(items[0]);
    const [multipleSelectedItems, setMultipleSelectedItem] = useState<selectItem[]>([]);
    return (
        <Listbox multiple={multiple} onChange={(value: any) => {
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
                <Listbox.Button className="relative h-[3.125rem] w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left border border-gray-200 hover:border-orange-500 focus:border-orange-500 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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

export interface RadioButtonProps {
    id: string;
    name: string;
    value: string;
    label: string;
}

const RadioButton = ({ id, name, value, label }: RadioButtonProps) => {
    return (
        <>
            <input
                type="radio"
                className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id={id}
                name={name}
                value={value}
            />
            <label htmlFor="html" className="text-xs leading-4 font-normal text-gray-800">{label}</label>
        </>

    );
}

export const Input = {
    Password: Password,
    TextArea: TextArea,
    Number: Number,
    Text: Text,
    Select: Select,
    RadioButton: RadioButton,
};