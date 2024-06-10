import React, { ReactNode } from 'react';

export interface TagProps {
  text: string | ReactNode;
  closeIcon?: ReactNode;
  tagColor?: string;
  textColor?: string;
  onClose?: (event: any) => void;
}

export const Tag = ({
  text,
  tagColor = 'bg-primary/10',
  textColor = 'text-primary',
  closeIcon,
  onClose,
}: TagProps) => {
  return (
    <div
      className={`w-auto inline-flex rounded p-2 items-center mr-2 text-xs leading-4 font-normal ${tagColor} ${textColor}`}
    >
      {text}
      {closeIcon && (
        <div
          className="ml-2 cursor-pointer"
          onClick={(event) => onClose?.(event)}
        >
          {closeIcon}
        </div>
      )}
    </div>
  );
};
