import React, {ReactNode} from "react";

interface menu {
  key: string,
  title: string,
  onClick: () => void,
  icon: ReactNode,
}

export interface SidebarProps {
  menus: menu[]
}

export const Sidebar = ({ menus }: SidebarProps) => {
  const pathName = document.location.pathname;
  console.log('pathName: ', pathName.split('/'));

  return(
      <div className="w-full h-full border-r-[1px] border-gray-200">
        {
          menus.map((menu) => (
              <button
                  key={menu.key}
                  onClick={() => menu?.onClick()}
                  className="w-full text-gray-600 text-left mb-3.5 inline-flex text-xs leading-4 font-normal"
              >
                <span className="mr-2.5">{menu.icon}</span>{menu.title}
              </button>
          ))
        }
      </div>
  );
}