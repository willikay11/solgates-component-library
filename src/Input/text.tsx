import React, {ReactNode, useState} from "react";

export interface TextInputProps {
    name?: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    clearIcon?: ReactNode;
    placeholder?: string;
    className?: string;
    error?: string
}

export const Text = ({ name, prefixIcon, suffixIcon, clearIcon, placeholder, className, error }: TextInputProps) => {
    const [currentText, setCurrentText] = useState<string>('');
    return (
        <>
            <div className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 ${className}`}>
                {prefixIcon && <div className="flex">{prefixIcon}</div>}
                <input
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800`}
                    aria-invalid={
                        Boolean(error) ||
                        undefined
                    }
                    aria-errormessage={
                        error
                            ? `${name}-error`
                            : undefined
                    }
                />
                {suffixIcon && !clearIcon && <div>{suffixIcon}</div>}
                {clearIcon && <div className="cursor-pointer" onClick={() => setCurrentText('')} >{clearIcon}</div>}
            </div>
            <p
                className="form-validation-error"
                role="alert"
                id={`${name}-error`}
            >
                {error}
            </p>
        </>
    );
}