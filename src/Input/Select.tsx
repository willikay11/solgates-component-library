import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Tag } from '../Tag';
import { CloseLine } from '../Icons';
import Colors from '../Colors';

export interface selectItem {
  label: string;
  value: string | number | undefined;
  disabled?: boolean;
}

export interface SelectInputProps {
  items: selectItem[];
  arrowIcon: ReactNode;
  prefixIcon?: ReactNode;
  multiple?: boolean;
  name?: string;
  onChange?: (selectedItem: selectItem | selectItem[]) => void;
  style?: React.CSSProperties;
  error?: string;
  border?: 'bordered' | 'borderless';
  defaultValue?: string;
  defaultValues?: string[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  placeholder?: string;
  multipleFormDataName?: string;
  disabled?: boolean;
}

export const Select = ({
  items,
  arrowIcon,
  multiple = false,
  prefixIcon,
  name,
  onChange,
  error,
  border = 'bordered',
  defaultValue,
  defaultValues,
  showSearch = false,
  searchPlaceholder = 'Search...',
  placeholder = 'Select one',
  multipleFormDataName = 'id',
  style,
  disabled = false,
}: SelectInputProps) => {
  const listBoxRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionsRefs = useRef<HTMLButtonElement[]>([]);
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

  useEffect(() => {
    if (defaultValues?.length) {
      const multipleItems: selectItem[] = [];
      defaultValues.map((defaultValue) => {
        const item = items.find((item) => item.value === defaultValue);
        if (item && Object.keys(item).length) {
          multipleItems.push(item);
        }
      });

      setMultipleSelectedItem(multipleItems);
    }
  }, [defaultValues]);

  return (
    <>
      <input
        hidden
        name={name}
        value={
          multiple
            ? JSON.stringify(
                multipleSelectedItems.map((item) => {
                  return {
                    [multipleFormDataName]: item?.value,
                  };
                })
              )
            : selectedItem?.value
        }
      />

      <Listbox
        multiple={multiple}
        disabled={disabled}
        defaultValue={defaultValues?.length ? defaultValues : defaultValue}
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
            ref={listBoxRef}
            id="headlessui-listbox-options-:r8:"
            onClick={() => {
              if (showSearch) {
                searchInputRef.current?.focus();
              }
            }}
            style={style}
            className={`relative h-[3.125rem] w-full cursor-pointer rounded bg-white py-2 pl-3 pr-2 text-left ${
              border === 'bordered'
                ? 'border border-gray-200 hover:border-orange-500 focus:border-orange-500'
                : 'border border-transparent bg-transparent'
            } focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300  invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 sm:text-sm placeholder-opacity-100 focus-visible:placeholder-opacity-25`}
          >
            {({ open }) => (
              <div className="inline-flex items-center w-full h-full cursor-pointer">
                {prefixIcon}
                {multiple ? (
                  <>
                    <div className="mr-1" />
                    {multipleSelectedItems.map((selectedItem) => (
                      <Tag
                        text={selectedItem?.label}
                        onClose={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          items.forEach((item, index) => {
                            if (item.value === selectedItem.value) {
                              optionsRefs.current?.[index]?.click();
                            }
                          });
                        }}
                        closeIcon={
                          <CloseLine size={14} color={Colors.orange['600']} />
                        }
                      />
                    ))}
                    {showSearch && open ? (
                      <input
                        autoFocus
                        placeholder={
                          multipleSelectedItems.length ? '' : searchPlaceholder
                        }
                        value={searchValue ?? ''}
                        className="ml-2 cursor-pointer text-xs text-gray-800 font-normal w-full focus:ring-0 focus:outline-0 placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500"
                        onChange={(event) => setSearchValue(event.target.value)}
                      />
                    ) : (
                      !multipleSelectedItems.length && (
                        <input
                          onClick={() => {
                            listBoxRef?.current?.click();
                          }}
                          placeholder={placeholder}
                          className="ml-2 cursor-pointer text-xs text-gray-800 font-normal w-full disabled:bg-transparent placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 focus:ring-0 focus:outline-0"
                        />
                      )
                    )}
                  </>
                ) : (
                  <>
                    {showSearch && open ? (
                      <input
                        autoFocus
                        placeholder={selectedItem?.label ?? searchPlaceholder}
                        className="ml-2 cursor-pointer text-xs text-gray-800 font-normal w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 focus:ring-0 focus:outline-0"
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => setSearchValue(event.target.value)}
                      />
                    ) : selectedItem && Object.keys(selectedItem).length ? (
                      <span className="ml-2 truncate text-xs text-gray-800">
                        {selectedItem?.label}
                      </span>
                    ) : (
                      <input
                        onClick={() => {
                          listBoxRef?.current?.click();
                        }}
                        placeholder={placeholder}
                        className="ml-2 cursor-pointer text-xs text-gray-800 font-normal w-full disabled:bg-transparent placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 focus:ring-0 focus:outline-0"
                      />
                    )}
                    <span className="pointer-events-none inset-y-0 right-0 flex items-center pr-2">
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
            <Listbox.Options className="absolute min-w-[70px] mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[1000]">
              {items
                .filter((item) => {
                  if (searchValue !== null) {
                    return item?.label
                      ?.toLowerCase()
                      .includes(searchValue.toLowerCase());
                  }
                  return item;
                })
                .map((item, index) => (
                  <Listbox.Option
                    key={item.value}
                    ref={(ref: any) => {
                      optionsRefs.current[index] = ref;
                    }}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                        active
                          ? 'bg-orange-100 text-orange-600'
                          : item.disabled ? 'bg-gray-100' : 'text-gray-900'
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
                          className={`block truncate text-xs text-gray-800 ${
                            selected
                              ? 'font-medium text-orange-600'
                              : item.disabled ? 'text-gray-300' : 'font-normal'
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
