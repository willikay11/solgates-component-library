import React, { ReactNode, useEffect, useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Select } from './Select';

export interface PhoneNumberProps {
  arrowIcon: ReactNode;
  countryCodes: { label: string; value: string }[];
  name?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  clearIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  countryCodeDefaultValue?: string;
  countryCodeFormName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onPhoneNumberValid?: (valid: boolean) => void
}
export const PhoneNumber = ({
  arrowIcon,
  countryCodes,
  name,
  prefixIcon,
  suffixIcon,
  clearIcon,
  placeholder,
  className,
  error,
  value,
  defaultValue,
  countryCodeDefaultValue,
  countryCodeFormName = 'countryCode',
  onChange,
  disabled = false,
    onPhoneNumberValid
}: PhoneNumberProps) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState<
    string | undefined
  >(countryCodeDefaultValue);
  const [currentError, setCurrentError] = useState<string | undefined>(error);

  let errorClassName = '';

  if (Boolean(error)) {
    errorClassName = 'border-red-600 text-red-600 ring-red-600';
  }

  useEffect(() => {
    if (selectedCountryCode && currentText) {
      if (!isValidPhoneNumber(`${selectedCountryCode}${currentText}`)) {
        setCurrentError('Phone Number not valid');
        onPhoneNumberValid?.(false);
      } else {
        setCurrentError(undefined);
        onPhoneNumberValid?.(true);
      }
    }
  }, [selectedCountryCode, currentText]);

  return (
    <>
      <div
        className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center ${errorClassName} ${className}`}
      >
        {prefixIcon && <div className="flex">{prefixIcon}</div>}
        <div className="w-fit">
          <Select
            name={countryCodeFormName}
            items={countryCodes}
            arrowIcon={arrowIcon}
            defaultValue={countryCodeDefaultValue}
            border="borderless"
            style={{ background: 'transparent' }}
            disabled={disabled}
            onChange={(selectedItem: { label: string; value: string }) => {
              setSelectedCountryCode(selectedItem?.[0].value);
            }}
          />
        </div>
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          value={currentText || value}
          defaultValue={defaultValue}
          onChange={(e) => {
            setCurrentText(e.target.value);
            onChange?.(e);
          }}
          className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800 focus:border-transparent focus:ring-0`}
          aria-invalid={Boolean(error) || undefined}
          aria-errormessage={error ? `${name}-error` : undefined}
          disabled={disabled}
        />
        {suffixIcon && !clearIcon && <div>{suffixIcon}</div>}
        {clearIcon && (
          <div className="cursor-pointer" onClick={() => setCurrentText('')}>
            {clearIcon}
          </div>
        )}
      </div>
      {currentError && (
        <p
          className="text-xs font-normal mb-1.5 mt-1.5 leading-4 text-red-600"
          role="alert"
          id={`${name}-error`}
        >
          {currentError}
        </p>
      )}
    </>
  );
};
