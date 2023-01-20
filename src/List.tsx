import React, { ReactNode } from "react";

interface item {
    leftContent: ReactNode,
    rightContent: ReactNode
}
export interface ListProps {
    title: string,
    items: item[]
}

export const List = ({ title, items }: ListProps) => {
  return(
      <div className="rounded border-[1px] border-gray-200 bg-white">
          <div className="flex flex-row border-b-[1px] border-gray-200 p-[15px] justify-between">
              <span className="text-sm leading-4 font-semibold text-gray-800">{title}</span>
          </div>
          <div className="p-[15px]">
              {items.map((item, index) => (
                  <div key={index} className={`flex flex-row ${items.length - 1 !== index ? 'mb-[15px]': '' }`}>
                      <div className="flex flex-1">{item.leftContent}</div>
                      <div className="flex flex-1 justify-end">{item.rightContent}</div>
                  </div>
              ))}
          </div>
      </div>
  );
}