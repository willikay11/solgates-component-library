import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Tag } from '../Tag';

interface selectItem {
  label: string;
  value: string | number | null;
  disabled?: boolean;
}

export interface SelectInputProps {
  items: selectItem[];
  arrowIcon: ReactNode;
  selectedIcon?: ReactNode;
  prefixIcon?: ReactNode;
  multiple?: boolean;
  name?: string;
  value?: string;
  onChange?: (selectedItem: selectItem | selectItem[]) => void;
  error?: string;
  border?: 'bordered' | 'borderless';
  defaultValue?: string;
  showSearch?: boolean;
}

export const Select = ({
  items,
  arrowIcon,
  multiple = false,
  prefixIcon,
  value,
  name,
  onChange,
  error,
  border = 'bordered',
  defaultValue,
  showSearch = false,
}: SelectInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<selectItem | null>(null);
  const [multipleSelectedItems, setMultipleSelectedItem] = useState<
    selectItem[]
  >([]);

  useEffect(() => {
    if (defaultValue) {
      const item = items.find((item) => item.value === defaultValue);
      if (item && Object.keys(item).length) {
        setSelectedItem(item);
      }
    }
  }, [defaultValue]);

  return (
    <>
      <Listbox
        multiple={multiple}
        defaultValue={defaultValue}
        name={name}
        value={value}
        onChange={(value: any) => {
          if (multiple) {
            const selectedItems: [string] = value;
            const foundItems: selectItem[] = [];
            selectedItems.forEach((selectedItem) => {
              const foundItem = items.filter(
                (item) => item.value === selectedItem
              );
              foundItems.push(foundItem[0]);
            });
            setMultipleSelectedItem(foundItems);
            onChange?.(foundItems);
          } else {
            const foundItem = items.filter((item) => item.value === value);
            if (foundItem) {
              setSelectedItem(foundItem[0]);
            }
            onChange?.(foundItem);
          }
        }}
      >
        <div className="relative w-full">
          <Listbox.Button
            id="headlessui-listbox-options-:r8:"
            onClick={() => {
              if (showSearch) {
                searchInputRef.current?.focus();
              }
            }}
            className={`relative h-[3.125rem] w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left ${
              border === 'bordered'
                ? 'border border-gray-200 hover:border-orange-500 focus:border-orange-500'
                : 'border border-transparent bg-transparent'
            } focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300  invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:text-sm placeholder-opacity-100 focus-visible:placeholder-opacity-25`}
          >
            {({ open }) => (
              <div className="inline-flex items-center w-full h-full">
                {prefixIcon}
                {multiple ? (
                  <>
                    <div className="mr-1" />
                    {multipleSelectedItems.map((selectedItem) => (
                      <Tag text={selectedItem.label} />
                    ))}
                    {showSearch && open && (
                      <input
                        autoFocus
                        placeholder="Search..."
                        value={searchValue ?? ''}
                        className="ml-2 font-normal w-full focus:ring-0 focus:outline-0"
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => setSearchValue(event.target.value)}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {showSearch && open ? (
                      <input
                        autoFocus
                        placeholder={selectedItem?.label ?? 'Search...'}
                        className="ml-2 font-normal w-full focus:ring-0 focus:outline-0"
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => setSearchValue(event.target.value)}
                      />
                    ) : (
                      <span className="ml-2 truncate">
                        {selectedItem?.label}
                      </span>
                    )}
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      {arrowIcon}
                    </span>
                  </>
                )}
              </div>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[1000]">
              {items
                .filter((item) => {
                  if (searchValue !== null) {
                    return item?.label
                      ?.toLowerCase()
                      .includes(searchValue.toLowerCase());
                  }
                  return item;
                })
                .map((item) => (
                  <Listbox.Option
                    key={item.value}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                        active
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-900'
                      }`
                    }
                    value={item.value}
                    disabled={item.disabled || false}
                    onClick={() => {
                      if (showSearch) {
                        setSearchValue(null);
                      }
                    }}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? 'font-medium text-orange-600'
                              : 'font-normal'
                          }`}
                        >
                          {item.label}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
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
