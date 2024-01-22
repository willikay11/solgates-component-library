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
  error?: string;
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
  error,
}: CheckboxProps) => {
  return (
    <>
      <div className="flex items-start">
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
      {error && (
        <p
          className="text-xs font-normal mb-1.5 mt-1.5 leading-4 text-red-600"
          role="alert"
          id={`${name}-error`}
        >
          {error}
        </p>
      )}
    </>
  );
};
