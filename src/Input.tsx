import React, { ReactNode } from "react";

export enum TextTypes {
    text = 'text',
    number = 'number',
    textarea = 'textarea',
}
export interface InputProps {
    type: TextTypes.text | TextTypes.number | TextTypes.textarea;
    min: number;
    max: number;
    prefixIcon?: ReactNode;
    rows: number;
}

export const Input = ({ prefixIcon, type, min, max, rows = 5 }: InputProps) => {
    if (type === TextTypes.textarea) {
        return (<textarea className="w-full p-2.5 rounded bg-white border border-gray-200 outline-0 focus:border-orange-500" rows={rows} />);
    }
  return (
      <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus:border-orange-500">
        {prefixIcon && <div className="">{prefixIcon}</div>}
        <input type={type} min={min} max={max} className="ml-2 outline-0 w-full" />
      </div>
  );
}