import React, { ReactNode, useState } from 'react';

export interface PasswordInputProps {
  iconRender: (visible: boolean) => ReactNode;
  name?: string;
  prefixIcon?: ReactNode;
  placeholder?: string;
  error?: string;
  value?: string;
}

export const Password = ({
  prefixIcon,
  name,
  iconRender,
  placeholder,
  error,
  value,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  let errorClassName = '';

  if (Boolean(error)) {
    errorClassName = 'border-red-600 text-red-600 ring-red-600';
  }

  return (
    <>
      <div
        className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center ${errorClassName}`}
      >
        {prefixIcon && <div className="flex">{prefixIcon}</div>}
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          value={value}
          className="ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800 focus:border-transparent focus:ring-0"
        />
        {iconRender && (
          <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            {iconRender(isPasswordVisible)}
          </div>
        )}
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
