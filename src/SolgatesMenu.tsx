import React, { Fragment, useState, useRef, ReactNode, useEffect } from 'react';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import {
  AccountCircle,
  Heart3Line,
  Menu4Line,
  PhoneLine,
  QuestionLine,
  Search2Line,
  Shop2Line,
  ShoppingBagLine,
  User6Line,
} from './Icons';
import { Input } from './Input';
import colors from './Colors';
import { Modal, MODAL_POSITION } from './Modal';

interface item {
  label: string;
  id: string;
}

interface category {
  label: string;
  items: item[];
}

interface menu {
  key: number;
  id: string;
  label: string;
  gap: number;
  category?: category[];
}

export interface SolgatesMenuProps {
  logoUrl: string;
  menus: menu[];
  userContent: ReactNode;
  onLogoClick: () => void;
  onClickWishList: () => void;
  onClickMenuItem: (id: string) => void;
  onOpenShopClick: () => void;
  shoppingCartContent: ReactNode;
  phoneNumber: string;
  isLoggedIn: boolean;
  userName?: string;
}

export const SolgatesMenu = ({
  menus,
  logoUrl,
  onLogoClick,
  userContent,
  onClickWishList,
  onClickMenuItem,
  shoppingCartContent,
  phoneNumber,
  onOpenShopClick,
  isLoggedIn,
  userName,
}: SolgatesMenuProps) => {
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const openedRef = useRef<HTMLButtonElement | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [newProductAdded, setNewProductAdded] = useState<boolean>(false);
  const calculateKey = (
    menuKey: number,
    multiplicationFactor: number,
    currentKey: number
  ) => {
    return menuKey * multiplicationFactor + currentKey;
  };

  const clickRecent = (index: any) => {
    const clickedButton = buttonRefs.current[index];
    if (clickedButton === openedRef.current) {
      openedRef.current = null;
      return;
    }

    if (Boolean(openedRef.current?.getAttribute('data-value'))) {
      openedRef.current?.click();
    }
    openedRef.current = clickedButton;
  };

  const onCartOpened = () => {
    const event = new CustomEvent('cartOpened');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    window.addEventListener('productAdded', () => {
      setNewProductAdded(true);
    });

    window.addEventListener('cartOpened', () => {
      setNewProductAdded(false);
    });
  }, []);

  return (
    <>
      <Modal
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        position={MODAL_POSITION.BOTTOM}
      >
        {menus.map((menu) => (
          <Disclosure key={menu.key}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  data-value={open}
                  ref={(ref: any) => {
                    buttonRefs.current[menu.key] = ref;
                  }}
                  onClick={() => clickRecent(menu.key)}
                  className="flex py-2 outline-none"
                >
                  {menu.label}
                </Disclosure.Button>
                <Disclosure.Panel className="ml-[10px] text-gray-500">
                  {menu?.category?.map((category, index) => (
                    <Disclosure key={`${category.label}-${index}`}>
                      {({ open }) => {
                        const key = calculateKey(menu.key, 100, index);
                        return (
                          <>
                            <Disclosure.Button
                              data-value={open}
                              ref={(ref: any) => {
                                buttonRefs.current[key] = ref;
                              }}
                              onClick={() => clickRecent(key)}
                              key={key}
                              className="flex py-2 outline-none"
                            >
                              {category.label}
                            </Disclosure.Button>
                            <Disclosure.Panel className="ml-[10px] text-gray-500">
                              {category.items.map((item, index) => (
                                <button
                                  key={`${item.label}-${index}`}
                                  className="text-xs leading-4 font-normal text-gray-600"
                                  onClick={() => onClickMenuItem(item.id)}
                                >
                                  {item.label}
                                </button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        );
                      }}
                    </Disclosure>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </Modal>
      <div className="fixed relative w-full h-[60px] md:h-[128px] lg:h-[128px] items-center border-b border-gray-100">
        <div className="bg-gray-100 flex py-[4px] lg:grid lg:grid-cols-12 w-full">
          <div className="md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-8 flex w-full items-center justify-center md:justify-end lg:justify-end">
            <span className="inline-flex text-[10px] text-gray-600 mr-2">
              <PhoneLine
                color={colors.gray['400']}
                size={14}
                className="mr-2"
              />
              {phoneNumber}
            </span>
            <div className="border-[1px] border-gray-300 h-full rounded mr-2" />
            <span className="inline-flex text-[10px] text-gray-600 mr-2">
              <QuestionLine
                color={colors.gray['400']}
                size={14}
                className="mr-2"
              />
              Help
            </span>
            <div className="border-[1px] border-gray-300 h-full rounded mr-2" />
            <span
              className="inline-flex text-[10px] text-gray-600 mr-2 cursor-pointer"
              onClick={() => onOpenShopClick()}
            >
              <Shop2Line
                color={colors.gray['400']}
                size={14}
                className="mr-2"
              />
              Open Shop
            </span>
          </div>
        </div>
        <div
          className="hidden md:grid lg:grid grid-cols-12 w-full"
          style={{ height: 'calc(128px - 25px)' }}
        >
          <div className="md:col-start-2 md:col-span-7 lg:col-start-3 lg:col-span-6 inline-flex">
            <img
              src={logoUrl}
              className="w-[90px] mr-[30px] cursor-pointer"
              onClick={() => onLogoClick()}
            />
            {menus.map((menu) => {
              if (menu?.category?.length) {
                return (
                  <Menu
                    key={menu.key}
                    as="div"
                    className="inline-flex text-left mr-[20px] h-full"
                  >
                    <div>
                      <Menu.Button className="inline-flex justify-center items-center h-full bg-white text-xs leading-4 font-medium text-gray-800 active:border-b border-orange-600 hover:border-b border-orange-600">
                        {menu.label}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 absolute right-0 top-[120px] mt-2 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                        <div className={`grid grid-cols-12 my-[30px]`}>
                          <div className="md:col-start-2 md:col-span-9 lg:col-start-3 lg:col-span-8 inline-flex">
                            <div
                              className={`grid gap-${menu?.gap} grid-cols-4 w-full`}
                            >
                              {menu?.category?.map((category, index) => {
                                const key = calculateKey(menu.key, 100, index);
                                return (
                                  <div key={key}>
                                    <p className="text-xs leading-4 font-semibold tracking-wider uppercase text-gray-500">
                                      {category.label}
                                    </p>
                                    {category.items.map((item) => (
                                      <Menu.Item key={key}>
                                        <button
                                          className="text-xs leading-4 font-medium text-gray-800 hover:underline text-left w-full"
                                          onClick={() =>
                                            onClickMenuItem(item.id)
                                          }
                                        >
                                          {item.label}
                                        </button>
                                      </Menu.Item>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                );
              }
              return (
                <button
                  key={menu.key}
                  onClick={() => onClickMenuItem(menu?.id)}
                  className="mr-[20px] inline-flex justify-center items-center h-full bg-white text-xs leading-4 font-medium text-gray-800 active:border-b border-orange-600 hover:border-b border-orange-600"
                >
                  {menu.label}
                </button>
              );
            })}
          </div>
          <div className="col-span-3 inline-flex items-center justify-end">
            <Menu>
              <div className="relative flex items-center">
                <Menu.Button>
                  {isLoggedIn ? (
                    <div className="flex flex-row mr-1.5 items-center">
                      <AccountCircle
                        className="mr-[5px] cursor-pointer"
                        color={colors.blue['500']}
                        size={20}
                      />
                      <p className="text-xs font-normal leading-4 text-gray-800 truncate w-[60px]">
                        Hi, {userName}
                      </p>
                    </div>
                  ) : (
                    <User6Line
                      className="mr-[10px] cursor-pointer"
                      color={colors.gray['600']}
                      size={18}
                    />
                  )}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="min-w-[220px] p-[15px] rounded z-50 absolute top-[40px] mt-2 -left-[100px] min-h-[100px] divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                    {userContent}
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
            <Menu>
              <div className="relative flex items-center">
                <div className="cursor-pointer" onClick={onClickWishList}>
                  <Heart3Line
                    className="mr-[10px] cursor-pointer"
                    color={colors.gray['600']}
                    size={18}
                  />
                </div>
              </div>
            </Menu>
            <Menu>
              <div className="relative flex items-center">
                <Menu.Button
                  className="relative"
                  onClick={() => onCartOpened()}
                >
                  <ShoppingBagLine
                    className="mr-[10px] cursor-pointer"
                    color={colors.gray['600']}
                    size={18}
                  />
                  {newProductAdded && (
                    <div className="absolute -top-3 right-[8px]">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500">
                        <span className="animate-ping absolute inline-flex h-2 w-full rounded-full bg-red-400 opacity-75" />
                      </span>
                    </div>
                  )}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="min-w-[320px] p-[15px] rounded z-50 absolute top-[40px] mt-2 -left-[100px] min-h-[100px] divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                    {shoppingCartContent}
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
            <Search2Line
              className="mr-[10px] lg:hidden"
              color={colors.gray['600']}
              size={18}
            />
            <Input.Text
              className="md:hidden lg:flex h-[36px] rounded-[68px] w-[135px] bg-gray-50"
              placeholder="Search"
              prefixIcon={<Search2Line size={14} color={colors.gray['400']} />}
            />
          </div>
        </div>
        <div className="mx-3 flex md:hidden lg:hidden items-center h-[40px]">
          <div className="flex flex-1" onClick={() => setOpenMobileMenu(true)}>
            <Menu4Line
              className="cursor-pointer"
              size={14}
              color={colors.gray['600']}
            />
          </div>
          <div className="flex flex-1 justify-center">
            <img src={logoUrl} className="w-[60px]" />
          </div>
          <div className="flex flex-1 justify-end">
            <User6Line
              className="mr-[10px]"
              color={colors.gray['600']}
              size={14}
            />
            <Heart3Line
              className="mr-[10px]"
              color={colors.gray['600']}
              size={14}
            />
            <ShoppingBagLine
              className="mr-[10px]"
              color={colors.gray['600']}
              size={14}
            />
            <Search2Line color={colors.gray['600']} size={14} />
          </div>
        </div>
      </div>
    </>
  );
};
