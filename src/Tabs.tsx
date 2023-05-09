import React, { ReactNode } from 'react';
import { Tab } from '@headlessui/react';

interface item {
  label: string | ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: item[];
  defaultActiveKey?: number;
  onChange?: (activeKey: number) => void;
}

export const Tabs = ({ defaultActiveKey, items, onChange }: TabsProps) => {
  return (
    <Tab.Group
      defaultIndex={defaultActiveKey}
      onChange={(index) => onChange?.(index)}
    >
      <Tab.List>
        <div className="flex">
          {items.map((item, index) => (
            <Tab
              key={index}
              className="outline-0 mb-2.5 flex flex-row flex-1"
              disabled={item.disabled}
            >
              {({ selected }) => (
                <div
                  className={`${
                    selected
                      ? 'text-orange-500 border-b-orange-500'
                      : 'text-gray-500'
                  } px-4 pb-2.5 font-normal border-b w-full`}
                >
                  {item.label}
                </div>
              )}
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels>
        {items.map((item, index) => (
          <Tab.Panel key={index}>{item.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
