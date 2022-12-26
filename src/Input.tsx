import React, {ReactNode, useState} from "react";

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

export const Input = {
    Password: Password,
    TextArea: TextArea,
    Number: Number,
    Text: Text,
};