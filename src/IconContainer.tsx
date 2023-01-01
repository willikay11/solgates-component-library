import React, {ReactNode} from "react";

export interface IconContainerProps {
    children: ReactNode,
    size?: string,
}

export const IconContainer = ({ children, size = '9' }: IconContainerProps) => {
  return(
      <div className={`w-${size} h-${size} rounded bg-gray-50 flex items-center justify-center p-2.5`}>{children}</div>
  )
}