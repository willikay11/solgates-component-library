import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface SectionHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  const headerClassName = clsx(
    'flex justify-center items-center mb-2 border-b-[1px] border-gray-100 pl-2 pr-2 relative h-[35px]',
    className
  );
  return <header className={headerClassName}>{children}</header>;
};
