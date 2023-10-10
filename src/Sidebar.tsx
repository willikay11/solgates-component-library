import React, { ReactNode } from 'react';

interface menu {
  key: string;
  title: string;
  onClick: () => void;
  icon: ReactNode;
  show: boolean;
}

export interface SidebarProps {
  selectedMenuKey: string;
  menus: menu[];
}

export const Sidebar = ({ menus, selectedMenuKey }: SidebarProps) => {
  return (
    <div className="w-full h-full border-r-[1px] border-gray-200">
      {menus.map((menu) => (
        <button
          key={menu.key}
          onClick={() => menu?.onClick()}
          className={`w-full text-left mb-3.5 inline-flex text-xs leading-4 font-normal ${
            selectedMenuKey === menu.key
              ? 'text-orange-600 border-r-[1px] border-orange-600'
              : 'text-gray-600'
          } ${!menu.show && 'hidden'} hover:text-orange-600`}
        >
          <span className="mr-2.5">{menu.icon}</span>
          {menu.title}
        </button>
      ))}
    </div>
  );
};
