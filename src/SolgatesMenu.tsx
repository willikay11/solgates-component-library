import React, { Fragment, useState, useRef, ReactNode, useEffect } from 'react';
import { Menu, Transition, Disclosure, Popover } from '@headlessui/react';
import {
  AccountCircle,
  AddLine,
  CloseLine,
  Heart3Line,
  Menu4Line,
  Minus,
  PhoneLine,
  QuestionLine,
  Search2Line,
  Shop2Line,
  ShoppingBagLine,
  User6Line,
} from './Icons';
import colors from './Colors';
import { Modal, MODAL_POSITION } from './Modal';

const openIcon = <AddLine color={colors.gray['800']} size={18} />;
const closeIcon = <Minus color={colors.gray['800']} size={18} />;

interface menu {
  id: string;
  name: string;
  query: string;
  isPage: boolean;
  weight: number;
  active: number;
  count: number;
  attributeId?: number;
  referenceAttributes?: string[];
  children?: menu[];
}

export interface SolgatesMenuProps {
  logoUrl: string;
  menus: menu[];
  userContent?: ReactNode;
  onLogoClick: () => void;
  onClickWishList?: () => void;
  onClickMenuItem: (menu: menu) => void;
  onOpenShopClick?: () => void;
  shoppingCartContent?: ReactNode;
  onSearchClick?: () => void;
  phoneNumber?: string;
  isLoggedIn: boolean;
  userName?: string;
  isSeller?: boolean;
  shopName?: string;
}

export const SolgatesMenu = ({
  menus,
  logoUrl,
  onLogoClick,
  userContent,
  onClickWishList,
  onClickMenuItem,
  onSearchClick,
  shoppingCartContent,
  phoneNumber,
  onOpenShopClick,
  isLoggedIn,
  userName,
  isSeller = false,
  shopName,
}: SolgatesMenuProps) => {
  const openedRef = useRef<HTMLButtonElement | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const menuRefs = useRef<HTMLButtonElement[]>([]);
  const secondLevelOpenedRef = useRef<HTMLButtonElement | null>(null);
  const secondLevelButtonRefs = useRef<HTMLButtonElement[]>([]);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [openMobileUserContent, setOpenUserContent] = useState<boolean>(false);
  const [openMobileShoppingCart, setOpenMobileShoppingCart] =
    useState<boolean>(false);
  const [newProductAdded, setNewProductAdded] = useState<boolean>(false);
  // let previousOpenMenu: number | null = null;
  const calculateKey = (
    menuKey: number,
    multiplicationFactor: number,
    currentKey: number
  ) => {
    return menuKey * multiplicationFactor + currentKey;
  };

  // const openMenu = (index: number) => {
  //   closeMenu();
  //   previousOpenMenu = index;
  //   menuRefs.current[index].click();
  // };

  // const closeMenu = () => {
  //   if (previousOpenMenu !== null) {
  //     console.log('previousMenu');
  //     menuRefs?.current?.[previousOpenMenu]?.dispatchEvent(new KeyboardEvent('keydown', {
  //       key: 'Escape',
  //       bubbles: true,
  //       cancelable: true,
  //     }));
  //     previousOpenMenu = null;
  //   }
  // };

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

  const clickSecondLevelMenu = (index: any) => {
    const clickedButton = secondLevelButtonRefs.current[index];
    if (clickedButton === secondLevelOpenedRef.current) {
      secondLevelOpenedRef.current = null;
      return;
    }

    if (Boolean(secondLevelOpenedRef.current?.getAttribute('data-value'))) {
      secondLevelOpenedRef.current?.click();
    }
    secondLevelOpenedRef.current = clickedButton;
  };

  const onCartOpened = () => {
    const event = new CustomEvent('cartOpened');
    window.dispatchEvent(event);
  };

  const handleWindowSizeChange = () => {
    if (window.innerWidth > 640) {
      setOpenMobileShoppingCart(false);
      setOpenUserContent(false);
      setOpenMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('productAdded', () => {
      setNewProductAdded(true);
    });

    window.addEventListener('cartOpened', () => {
      setNewProductAdded(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Modal
        open={openMobileUserContent}
        onClose={() => setOpenUserContent(false)}
        position={MODAL_POSITION.BOTTOM}
      >
        <div className="flex justify-between items-center mb-2">
          {userName && (
            <span className="text-xs font-normal leading-4 text-gray-800 truncate w-1/2">
              Hi, {userName}
            </span>
          )}
          <CloseLine
            className="cursor-pointer"
            size={16}
            onClick={() => setOpenUserContent(false)}
          />
        </div>
        {userContent}
      </Modal>

      <Modal
        open={openMobileShoppingCart}
        onClose={() => setOpenMobileShoppingCart(false)}
        position={MODAL_POSITION.BOTTOM}
      >
        <div className="flex justify-end items-center mb-2">
          <CloseLine
            className="cursor-pointer"
            size={16}
            onClick={() => setOpenMobileShoppingCart(false)}
          />
        </div>
        {shoppingCartContent}
      </Modal>

      <Modal
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        position={MODAL_POSITION.BOTTOM}
        heightClass="h-4/6"
      >
        <div className="flex justify-end items-center mb-2">
          <CloseLine
            className="cursor-pointer"
            size={16}
            onClick={() => setOpenMobileMenu(false)}
          />
        </div>

        {menus.map((menu, index) => {
          if (menu.children?.length) {
            return (
              <Disclosure key={menu.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      data-value={open}
                      ref={(ref: any) => {
                        buttonRefs.current[index] = ref;
                      }}
                      onClick={() => clickRecent(menu.id)}
                      className="w-full flex justify-between items-center pb-2 outline-none"
                    >
                      <span>{menu.name}</span>
                      {open ? closeIcon : openIcon}
                    </Disclosure.Button>
                    <Disclosure.Panel className="ml-[10px] mr-[10px] text-gray-500">
                      {menu?.children?.map((child, index) => (
                        <Disclosure key={`${child.name}-${index}`}>
                          {({ open }) => {
                            const key = calculateKey(index, 100, index);
                            return (
                              <>
                                <Disclosure.Button
                                  data-value={open}
                                  ref={(ref: any) => {
                                    secondLevelButtonRefs.current[key] = ref;
                                  }}
                                  onClick={() => clickSecondLevelMenu(key)}
                                  key={key}
                                  className="w-full flex justify-between items-center pb-1 outline-none"
                                >
                                  <span>{child.name}</span>
                                  {open ? closeIcon : openIcon}
                                </Disclosure.Button>
                                <Disclosure.Panel className="ml-[10px] pb-2 text-gray-500 flex flex-col">
                                  {child?.children?.map((item, index) => (
                                    <button
                                      key={`${item.name}-${index}`}
                                      className="text-[0.8rem] leading-4 font-normal text-gray-600 text-start mb-1.5"
                                      onClick={() => onClickMenuItem(item)}
                                    >
                                      {item.name}
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
            );
          }
          return (
            <button
              key={menu.id}
              onClick={() => onClickMenuItem(menu)}
              className="mr-[20px] mb-3 flex justify-start items-start h-full bg-white text-sm font-medium leading-4 text-gray-800 border-orange-600"
            >
              {menu.name}
            </button>
          );
        })}
      </Modal>
      <div
        className={`fixed relative w-full h-[80px] ${
          isSeller ? 'md:h-[90px]' : 'md:h-[128px]'
        } bg-white items-center border-b border-gray-100`}
      >
        {!isSeller ? (
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
                onClick={() => onOpenShopClick?.()}
              >
                <Shop2Line
                  color={colors.gray['400']}
                  size={14}
                  className="mr-2"
                />
                <span className="truncate w-[60px]">
                  {shopName ? shopName : 'Open Shop'}
                </span>
              </span>
            </div>
          </div>
        ) : null}
        <div
          className="hidden md:grid lg:grid grid-cols-12 w-full"
          style={{ height: isSeller ? '100%' : `calc(128px - 25px)` }}
        >
          <div className="md:col-start-2 md:col-span-7 lg:col-start-3 lg:col-span-6 inline-flex">
            <img
              src={logoUrl}
              className="w-[90px] mr-[30px] cursor-pointer"
              onClick={() => onLogoClick()}
            />
            {menus.map((menu, index) => {
              if (menu?.children?.length) {
                return (
                  <Menu
                    key={menu.id}
                    as="div"
                    onClick={() => onClickMenuItem(menu)}
                    className="inline-flex text-left mr-[20px] h-full group"
                  >
                    {() => (
                      <>
                        <div>
                          <Menu.Button
                            ref={(ref: any) => {
                              menuRefs.current[index] = ref;
                            }}
                            // onMouseEnter={() => !open && openMenu(index)}
                            className="inline-flex justify-center items-center outline-0 h-full bg-white text-xs leading-4 font-medium text-gray-800 group-hover:border-b active:border-b border-orange-600 hover:border-b border-orange-600"
                          >
                            {menu.name}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease duration-500 transform"
                          enterFrom="opacity-0 -translate-y-6"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease duration-300 transform"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-6"
                        >
                          <Menu.Items className="z-50 absolute right-0 top-[120px] mt-2 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                            <div className={`grid grid-cols-12 my-[30px]`}>
                              <div className="md:col-start-2 md:col-span-9 lg:col-start-3 lg:col-span-8 inline-flex">
                                <div
                                  className={`grid gap-4 grid-cols-4 w-full`}
                                >
                                  {menu?.children?.map((child, index) => {
                                    const key = calculateKey(index, 100, index);
                                    return (
                                      <div key={key}>
                                        <p
                                          onClick={(event) => {
                                            event.stopPropagation();
                                            onClickMenuItem(child);
                                          }}
                                          className="text-xs leading-4 font-semibold tracking-wider uppercase text-gray-500 cursor-pointer"
                                        >
                                          {child.name}
                                        </p>
                                        {child?.children?.map((item) => (
                                          <Menu.Item key={key}>
                                            <button
                                              className="text-xs leading-4 font-medium text-gray-800 hover:underline text-left w-full"
                                              onClick={(event) => {
                                                event.stopPropagation();
                                                onClickMenuItem(item);
                                              }}
                                            >
                                              {item.name}
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
                      </>
                    )}
                  </Menu>
                );
              }
              return (
                <button
                  key={menu.id}
                  onClick={() => {
                    onClickMenuItem(menu);
                  }}
                  className="mr-[20px] inline-flex justify-center items-center h-full bg-white text-xs leading-4 font-medium text-gray-800 active:border-b border-orange-600 hover:border-b border-orange-600"
                >
                  {menu.name}
                </button>
              );
            })}
          </div>
          <div className="col-span-2 inline-flex items-center justify-end">
            <Popover>
              <div className="relative flex items-center">
                <Popover.Button className="outline-0">
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
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease duration-500 transform"
                  enterFrom="opacity-0 -translate-y-6"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-300 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-6"
                >
                  <Popover.Panel className="min-w-[220px] p-[15px] rounded z-50 absolute top-[40px] mt-2 -left-[100px] min-h-[100px] divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                    {userContent}
                  </Popover.Panel>
                </Transition>
              </div>
            </Popover>
            {!isSeller && (
              <>
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
                      enter="transition ease duration-500 transform"
                      enterFrom="opacity-0 -translate-y-6"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease duration-300 transform"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-6"
                    >
                      <Menu.Items className="min-w-[320px] p-[15px] rounded z-50 absolute top-[40px] mt-2 -left-[100px] min-h-[100px] divide-y divide-gray-100 bg-white shadow-xl focus:outline-none">
                        {shoppingCartContent}
                      </Menu.Items>
                    </Transition>
                  </div>
                </Menu>
                <div onClick={() => onSearchClick?.()}>
                  <Search2Line
                    className="mr-[10px] cursor-pointer"
                    color={colors.gray['600']}
                    size={18}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mx-3 flex md:hidden lg:hidden xl:hidden 2xl:hidden items-center h-[60px]">
          <div className="flex flex-1" onClick={() => setOpenMobileMenu(true)}>
            <Menu4Line
              className="cursor-pointer"
              size={18}
              color={colors.gray['600']}
            />
          </div>
          <div className="flex flex-1 justify-center">
            <img
              src={logoUrl}
              className="w-[70px]"
              onClick={() => onLogoClick()}
            />
          </div>
          <div className="flex flex-1 justify-end">
            <div onClick={() => setOpenUserContent(true)}>
              {isLoggedIn ? (
                <div className="flex flex-row mr-1.5 items-center">
                  <AccountCircle
                    className="mr-[5px] ml-2 cursor-pointer"
                    color={colors.blue['500']}
                    size={18}
                  />
                </div>
              ) : (
                <User6Line
                  className="mr-[10px]"
                  color={colors.gray['600']}
                  size={18}
                />
              )}
            </div>

            {!isSeller && (
              <>
                <div onClick={() => onClickWishList?.()}>
                  <Heart3Line
                    className="mr-[10px]"
                    color={colors.gray['600']}
                    size={18}
                  />
                </div>
                <div onClick={() => setOpenMobileShoppingCart(true)}>
                  <ShoppingBagLine
                    className="mr-[10px]"
                    color={colors.gray['600']}
                    size={18}
                  />
                </div>
                <div onClick={() => onSearchClick?.()}>
                  <Search2Line color={colors.gray['600']} size={18} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
