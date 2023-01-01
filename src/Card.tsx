import React, { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    title?: ReactNode,
}
export const Card = ({ title, children }: CardProps) => {
  return (
      <div className="p-[15px] rounded bg-white border border-gray-200 min-h-min">
          {title}
          {children}
      </div>
  );
}