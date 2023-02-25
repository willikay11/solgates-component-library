import React, {ReactNode, useRef} from "react";
import {Button, ButtonTypes} from "../Button";
import {AddLine, Minus} from "../Icons";
import colors from "../Colors";

export interface NumberInputProps {
    min?: number;
    max?: number;
    prefixIcon?: ReactNode;
    placeholder?: string;
    border?: 'bordered' | 'borderless'
    width?: string;
    padding?: string;
    name?: string;
}

export const Number = ({ min, max, prefixIcon, placeholder, border = 'bordered', width = '30px', padding = '10px', name }: NumberInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const increase = () => {
        inputRef?.current?.stepUp();
    }

    const decrease = () => {
        inputRef?.current?.stepDown();
    }
    return (
        <div className={`flex h-[3.125rem] p-[${padding}] rounded bg-white ${border === 'bordered' ? 'border border-gray-200' : ''}  focus-within:border-orange-500 hover:border-orange-500 items-center invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500`}>
            {prefixIcon && <div className="flex">{prefixIcon}</div>}
            <Button onClick={() => decrease()} type={ButtonTypes.link}><Minus color={colors.gray["500"]} size={14} /></Button>
            <input
                name={name}
                ref={inputRef}
                type="number"
                placeholder={placeholder}
                min={min}
                max={max}
                className={`ml-2 w-[${width}] outline-0 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800`} />
            <Button onClick={() => increase()} type={ButtonTypes.link}><AddLine color={colors.gray["800"]} size={14} /></Button>
        </div>
    );
}
