import React, { ReactNode, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface radioOption {
  label: string;
  value: string;
  leftContent: ReactNode;
}

export interface CustomRadioButtonProps {
  label: string | ReactNode;
  selectedIcon: ReactNode;
  unSelectedIcon: ReactNode;
  options: radioOption[];
}

export const CustomRadioButton = ({
  label,
  options,
  selectedIcon,
  unSelectedIcon,
}: CustomRadioButtonProps) => {
  let [plan, setPlan] = useState<string>('');
  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label className="text-xs leading-4 font-medium text-gray-800 mb-[5px]">
        {label}
      </RadioGroup.Label>
      {options.map(option => (
        <RadioGroup.Option
          key={option.value}
          value={option.value}
          className={({ active, checked }) =>
            `${
              active
                ? 'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                : ''
            }
                      ${
                        checked
                          ? 'bg-blue-50 border-blue-600 bg-opacity-75 text-white'
                          : 'bg-white'
                      }
                      relative flex cursor-pointer px-5 py-4 mb-2 rounded bg-white border border-gray-200`
          }
        >
          {({ checked }) => (
            <>
              <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-1 items-center">
                  <div className="flex flex-1">
                    <RadioGroup.Label as="div" className="flex flex-1">
                      {option.leftContent}
                    </RadioGroup.Label>
                  </div>
                </div>
                <div className="flex shrink-0">
                  <span
                    className={`font-semibold text-xs leading-4 mr-2 ${
                      checked ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {option.label}
                  </span>
                  {checked ? selectedIcon : unSelectedIcon}
                </div>
              </div>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
