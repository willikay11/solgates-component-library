import React, {ReactNode} from "react";

export interface InformationBannerProps {
    leftContent: ReactNode,
    rightContent: ReactNode
}
export const InformationBanner = ({ leftContent, rightContent }: InformationBannerProps) => {
  return (
      <div className="w-full h-full rounded flex flex-row p-[30px]"
           style={{ background: 'linear-gradient(180deg, #EA580C 0%, #DB4437 100%)' }}>
          <div className="flex-1">{leftContent}</div>
          <div className="flex-1">{rightContent}</div>
      </div>
  )
}