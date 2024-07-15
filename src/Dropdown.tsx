import { Fragment, ReactNode } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { ArrowDownSLine } from './Icons';

interface item {
  label: string | ReactNode;
  value?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  items: item[];
  children: ReactNode;
}

export const Dropdown = ({ children, items }: DropdownProps) => {
  return (
    <Popover className="relative flex items-center">
      {({ open }) => (
        <>
          <Popover.Button className="outline-0 inline-flex items-center">
            {children}
            <ArrowDownSLine
              size={14}
              className={`${
                open ? 'origin-center rotate-180' : 'text-opacity-70'
              }
                  ml-2 h-5 w-5 text-gray-800 transition duration-150 ease-in-out`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-4 mt-3 w-fit min-w-[200px]">
              <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-2">
                  {items.map((item, index) => (
                    <button
                      key={`${item.label}-${index}`}
                      onClick={() => item?.onClick?.()}
                      className="rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <p className="text-sm font-medium text-gray-900">
                        {item.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
