import React, { ReactNode } from 'react';

export interface CheckboxProps {
  name: string;
  id: string;
  value: string;
  label?: ReactNode;
  disabled?: boolean;
  defaultChecked?: boolean | undefined;
  onChange?: (event: any) => void;
  defaultValue?: string;
  checked?: boolean;
}

export const Checkbox = ({
  id,
  name,
  label,
  value,
  disabled = false,
  onChange,
  defaultChecked,
  defaultValue,
  checked,
}: CheckboxProps) => {
  return (
    <div className="flex items-start items-start">
      <input
        disabled={disabled}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange?.(event)}
        defaultChecked={defaultChecked}
        defaultValue={defaultValue}
        checked={checked}
        className={`${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        } h-[14px] w-[14px] accent-orange-600 mr-1 border-gray-800`}
      />
      {label}
    </div>
  );
};
