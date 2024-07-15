import { ReactNode } from 'react';

export enum CARD_TYPE {
  border = 'border',
  shadow = 'shadow',
}
export interface CardProps {
  children: ReactNode;
  title?: string;
  type?: CARD_TYPE.border | CARD_TYPE.shadow;
  extraContent?: ReactNode;
}

export const Card = ({
  title,
  children,
  type = CARD_TYPE.border,
  extraContent,
}: CardProps) => {
  let className = 'border border-gray-200';

  if (type === CARD_TYPE.shadow) {
    className = 'shadow-base';
  }

  return (
    <div className={`rounded bg-white ${className} h-fit`}>
      {title && (
        <div className="border-b-[1px] pt-[15px] pr-[15px] pl-[15px]">
          <div className="flex flex-row items-center mb-[10px] justify-between">
            <span className="text-sm leading-5 font-semibold text-gray-800">
              {title}
            </span>
            {extraContent}
          </div>
        </div>
      )}
      <div className="p-[15px]">{children}</div>
    </div>
  );
};
