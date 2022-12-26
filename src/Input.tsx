import React, { ReactNode } from "react";

export enum TextTypes {
    text = 'text'
}
export interface InputProps {
    type: TextTypes.text;
    prefixIcon?: ReactNode;
}

export const Input = ({ prefixIcon,  }: InputProps) => {
  return (
      <div className="flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200">
        {prefixIcon && <div className="">{prefixIcon}</div>}
        <input type={TextTypes.text} className="ml-2 outline-0 w-full" />
      </div>
  );
}