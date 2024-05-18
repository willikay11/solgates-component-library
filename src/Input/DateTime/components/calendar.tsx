import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface CalendarProps {
  className?: string;
  children?: ReactNode;
}

export const Calendar: FC<CalendarProps> = ({ className, children }) => {
  const mainClassName = clsx('grid grid-cols-7 gap-y-2 pl-3 pr-3', className);
  return <main className={mainClassName}>{children}</main>;
};
