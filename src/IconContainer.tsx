import React, {ReactNode} from "react";

export interface IconContainerProps {
    children: ReactNode,
    size?: string,
    bgColor?: string
}

export const IconContainer = ({ children, bgColor = 'bg-gray-50', size = '9' }: IconContainerProps) => {
  return(
      <div className={`w-${size} h-${size} rounded ${bgColor} flex items-center justify-center p-2.5`}>{children}</div>
  )
}