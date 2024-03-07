import React, { ReactNode, useRef } from 'react';
import { Button, ButtonTypes } from '../Button';
import { AddLine, Minus } from '../Icons';
import colors from '../Colors';

export interface NumberInputProps {
  min?: number;
  max?: number;
  prefixIcon?: ReactNode;
  placeholder?: string;
  border?: 'bordered' | 'borderless';
  width?: string;
  padding?: string;
  name?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minIcon?: ReactNode;
  maxIcon?: ReactNode;
  disabled?: boolean;
}

export const Number = ({
  min,
  max,
  prefixIcon,
  placeholder,
  border = 'bordered',
  width = 'w-[30px]',
  padding = 'p-[10px]',
  name,
  value,
  defaultValue,
  error,
  onChange,
    minIcon,
                         maxIcon,
    disabled = false
}: NumberInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const increase = () => {
    inputRef?.current?.stepUp();
  };

  const decrease = () => {
    inputRef?.current?.stepDown();
  };

  let errorClassName = '';

  if (Boolean(error)) {
    errorClassName = 'border-red-600 text-red-600 ring-red-600';
  }
  return (
    <>
      <div
        className={`flex h-[3.125rem] ${padding} rounded bg-white ${
          border === 'bordered' ? 'border border-gray-200' : ''
        }  focus-within:border-orange-500 hover:border-orange-500 items-center ${errorClassName}`}
      >
        {prefixIcon && <div className="flex">{prefixIcon}</div>}
        {
          !disabled ? (
              <Button onClick={() => decrease()} type={ButtonTypes.link}>
                {minIcon ? minIcon : <Minus color={colors.gray['500']} size={14} />}
              </Button>
          ) : null
        }

        <input
          name={name}
          ref={inputRef}
          type="number"
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          min={min}
          max={max}
          onChange={(event) => {
            onChange?.(event);
          }}
          className={`ml-2 ${width} outline-0 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 text-xs text-gray-800 focus:border-transparent focus:ring-0`}
          disabled={disabled}
        />
        {
          !disabled ? (
              <Button onClick={() => increase()} type={ButtonTypes.link}>
                {
                  maxIcon ? maxIcon : <AddLine color={colors.gray['800']} size={14} />
                }
              </Button>
          ) : null
        }
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
