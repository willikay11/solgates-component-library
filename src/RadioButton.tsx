import React, {ReactNode, useState} from "react";
import { RadioGroup } from '@headlessui/react'

interface radioOption {
    label: string,
    value: string,
    leftContent: ReactNode,
}

export interface RadioButtonProps {
    label: string | ReactNode,
    selectedIcon: ReactNode,
    unSelectedIcon: ReactNode,
    options: radioOption[]
}

export const RadioButton = ({ label, options, selectedIcon, unSelectedIcon }: RadioButtonProps) => {
    let [plan, setPlan] = useState('startup')
    return(
      <RadioGroup value={plan} onChange={setPlan}>
          <RadioGroup.Label>{label}</RadioGroup.Label>
          { options.map(option => (
              <RadioGroup.Option
                  key={option.value}
                  value={option.value}
                  className={({ active, checked }) =>
                      `${
                          active
                              ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                              : ''
                      }
                      ${
                          checked ? 'bg-blue-50 border-blue-600 bg-opacity-75 text-white' : 'bg-white'
                      }
                      relative flex cursor-pointer px-5 py-4 mb-2 rounded bg-white border border-gray-200 outline-0`
                  }
              >
                  {({ checked }) => (
                      <>
                          <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                  <div className="text-sm">
                                      <RadioGroup.Label
                                          as="p"
                                          className={`font-medium text-gray-600`}
                                      >
                                          {option.leftContent}
                                      </RadioGroup.Label>
                                  </div>
                              </div>
                              <div className="flex shrink-0">
                              <span className={`font-semibold text-xs leading-4 mr-2 ${checked ? 'text-blue-600' : 'text-gray-800'}`}>{option.label}</span>
                              {checked ? selectedIcon : unSelectedIcon}
                              </div>

                          </div>
                      </>
                  )}
              </RadioGroup.Option>
          ))}
      </RadioGroup>
    )
}