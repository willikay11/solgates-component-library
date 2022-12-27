import React, { ReactNode } from "react";

export interface TagProps {
    text: string | ReactNode,
    closeIcon: ReactNode,
    tagColor?: string,
    textColor?: string,
}

export const Tag = ({ text, tagColor = 'bg-orange-100', textColor = 'text-orange-600', closeIcon }: TagProps) => {
  return(
      <div className={`w-auto inline-flex rounded p-2 items-center mr-2 ${tagColor} ${textColor}`}>
          {text}
          {closeIcon && <div className="ml-2 cursor-pointer">{closeIcon}</div>}
      </div>
  );
}