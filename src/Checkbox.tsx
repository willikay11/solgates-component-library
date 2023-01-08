import React, {ReactNode} from "react";

export interface CheckboxProps {
  name: string,
  id: string,
  label?: ReactNode,
  disabled?: boolean,
}

export const Checkbox = ({id, name, label, disabled = false }: CheckboxProps) => {
  return(
      <div className="flex items-start">
        <input disabled={disabled} type="checkbox" id={id} name={name} value="" className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} h-[14px] w-[14px] accent-orange-600 mr-1 border-gray-800`} />
          {label}
      </div>
  );
}