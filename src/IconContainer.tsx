import React, { ReactNode } from 'react';

export interface IconContainerProps {
  children: ReactNode;
  size?: string;
  bgColor?: string;
  borderRadius?: 'rounded' | 'rounded-full';
}

export const IconContainer = ({
  children,
  bgColor = 'bg-gray-50',
  borderRadius = 'rounded',
  size = '9',
}: IconContainerProps) => {
  return (
    <div
      className={`w-${size} h-${size} ${borderRadius} ${bgColor} inline-flex items-center justify-center p-2.5`}
    >
      {children}
    </div>
  );
};
