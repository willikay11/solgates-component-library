import React, { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    title?: string,
}
export const Card = ({ title, children }: CardProps) => {
  return (
      <div className="p-[15px] rounded bg-white border border-gray-200 min-h-min">
          {
              title && <div className="flex flex-row items-center border-b-[1px] pb-[10px] mb-[10px]">
                  <span className="text-sm leading-5 font-bold text-gray-800">{title}</span>
              </div>
          }
          {children}
      </div>
  );
}