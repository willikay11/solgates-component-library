import React from 'react';

export interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?: (event: any) => void;
}

export const RadioButton = ({
  id,
  name,
  value,
  label,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={event => onChange?.(event)}
        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 checked:text-orange-600 checked:hover:bg-orange-600 checked:active:bg-orange-600 checked:focus:bg-orange-600"
        aria-labelledby={id}
        aria-describedby={id}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-medium text-gray-800 ml-2 block"
        >
          {label}
        </label>
      )}
    </div>
  );
};
