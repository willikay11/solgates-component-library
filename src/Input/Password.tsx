import React, {ReactNode, useState} from "react";

export interface PasswordInputProps {
    iconRender: (visible: boolean) => ReactNode,
    prefixIcon?: ReactNode;
    placeholder?: string;
}

export const Password = ({ prefixIcon, iconRender, placeholder }: PasswordInputProps) => {
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