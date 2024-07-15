export interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  checked?: boolean | undefined;
  defaultValue?: string;
  onChange?: (event: any) => void;
  disabled?: boolean;
}

export const RadioButton = ({
  id,
  name,
  value,
  label,
  onChange,
  defaultValue,
  checked,
  disabled = false,
}: RadioButtonProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={(event) => onChange?.(event)}
        checked={checked}
        defaultValue={defaultValue}
        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 checked:text-orange-600 checked:hover:bg-orange-600 checked:active:bg-orange-600 checked:focus:bg-orange-600 focus:border-transparent focus:ring-0"
        aria-labelledby={id}
        aria-describedby={id}
        disabled={disabled}
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
