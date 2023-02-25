import React from "react";

export interface TextAreaInputProps {
    rows: number;
    name: string;
    placeholder?: string;
}

export const TextArea = ({ rows, name, placeholder }: TextAreaInputProps) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            className="w-full p-2.5 rounded bg-white border border-gray-200 outline-0 focus:border-orange-500 hover:border-orange-500 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800"
            rows={rows}
        />
    );
}