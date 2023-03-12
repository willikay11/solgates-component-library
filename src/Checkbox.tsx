import React, {ReactNode} from "react";

export interface CheckboxProps {
  name: string,
  id: string,
  value: string,
  label?: ReactNode,
  disabled?: boolean,
  checked?: boolean
}

export const Checkbox = ({id, name, label, value, disabled = false, checked = false }: CheckboxProps) => {
  return(
      <div className="flex items-start items-center">
        <input disabled={disabled} type="checkbox" checked={checked} id={id} name={name} value={value} className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} h-[14px] w-[14px] accent-orange-600 mr-1 border-gray-800`} />
          {label}
      </div>
  );
}