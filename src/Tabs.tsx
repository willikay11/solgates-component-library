import { ReactNode } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

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
  const tabClassName = clsx('outline-0', {
    'flex flex-row flex-1': tabWidth === 'full',
  });

  const selectedTabClassName = (selected: boolean) =>
    clsx('text-sm pb-1.5 px-2 w-full', {
      'text-primary border-b border-b-primary font-semibold': selected,
      'text-gray-500 border-b border-b-gray-200 font-light': !selected,
    });
  return (
    <Tab.Group
      defaultIndex={defaultActiveKey}
      onChange={(index) => onChange?.(index)}
    >
      <Tab.List>
        <div className="flex mb-2.5">
          {items.map((item, index) => (
            <Tab key={index} className={tabClassName} disabled={item.disabled}>
              {({ selected }) => (
                <div className={selectedTabClassName(selected)}>
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
