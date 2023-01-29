import React, { ReactNode } from "react";

export enum CARD_TYPE {
    border = 'border',
    shadow = 'shadow'
}
export interface CardProps {
    children: ReactNode,
    title?: string,
    type?: CARD_TYPE.border | CARD_TYPE.shadow,
    extraContent?: ReactNode,
}

export const Card = ({ title, children, type = CARD_TYPE.border, extraContent }: CardProps) => {
  let className = 'border border-gray-200';

  if (type === CARD_TYPE.shadow) {
      className = 'shadow-base';
  }

  return (
      <div className={`p-[15px] rounded bg-white ${className} min-h-min`}>
          {
              title && <div className="flex flex-row items-center border-b-[1px] pb-[10px] mb-[10px] justify-between">
                  <span className="text-sm leading-5 font-bold text-gray-800">{title}</span>
                  {extraContent}
              </div>
          }
          {children}
      </div>
  );
}