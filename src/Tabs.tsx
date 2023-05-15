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
  tabWidth?: 'full' | 'contain';
}

export const Tabs = ({
  defaultActiveKey,
  items,
  onChange,
  tabWidth = 'full',
}: TabsProps) => {
  return (
    <Tab.Group
      defaultIndex={defaultActiveKey}
      onChange={index => onChange?.(index)}
    >
      <Tab.List>
        <div className="flex border-b border-b-gray-200 mb-2.5">
          {items.map((item, index) => (
            <Tab
              key={index}
              className={`outline-0 ${
                tabWidth === 'full' ? 'flex flex-row flex-1' : 'mr-3.5'
              }`}
              disabled={item.disabled}
            >
              {({ selected }) => (
                <div
                  className={`${
                    selected
                      ? 'text-orange-500 border-b border-b-orange-500 font-semibold'
                      : 'text-gray-400 font-light'
                  } pb-1.5 w-full`}
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
