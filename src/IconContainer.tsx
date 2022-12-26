import React, {ReactNode} from "react";

export interface IconContainerProps {
    children: ReactNode
}
export const IconContainer = ({ children}: IconContainerProps) => {
  return(
      <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center p-2.5">{children}</div>
  )
}