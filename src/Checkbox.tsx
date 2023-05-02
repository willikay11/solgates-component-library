import React, {ReactNode} from "react";

export interface CheckboxProps {
  name: string,
  id: string,
  value: string,
  label?: ReactNode,
  disabled?: boolean,
  defaultChecked?: boolean | undefined,
  onChange?: (event: any) => void;
}

export const Checkbox = ({id, name, label, value, disabled = false, onChange, defaultChecked }: CheckboxProps) => {
  return(
      <div className="flex items-start items-center">
        <input
            disabled={disabled}
            type="checkbox"
            id={id}
            name={name}
            value={value}
            onChange={(event) => onChange?.(event)}
            defaultChecked={defaultChecked}
            className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} h-[14px] w-[14px] accent-orange-600 mr-1 border-gray-800`}
        />
          {label}
      </div>
  );
}