import React from 'react';

export interface TextAreaInputProps {
  rows: number;
  name: string;
  placeholder?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const TextArea = ({
  rows,
  name,
  placeholder,
  error,
  value,
  defaultValue,
  disabled = false,
}: TextAreaInputProps) => {
  let errorClassName = '';

  if (Boolean(error)) {
    errorClassName = 'border-red-600 text-red-600 ring-red-600';
  }
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`w-full p-2.5 rounded bg-white border border-gray-200 outline-0 focus:border-orange-500 hover:border-orange-500 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800 focus:ring-0 ${errorClassName}`}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
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
