import React, { ReactNode } from 'react';
import clsx from 'clsx';

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
  const classNames = clsx(
    `inline-flex items-center justify-center p-2.5 w-${size} h-${size}`,
    {
      'rounded-[50%]': borderRadius === 'rounded-full',
      rounded: borderRadius !== 'rounded-full',
    },
    bgColor
  );
  return <div className={classNames}>{children}</div>;
};
