import React from "react";

export interface PageBannerProps {
    imageUrl: string;
    title: string;
    height: string;
}

export const PageBanner = ({ imageUrl, title, height = 'h-96' }: PageBannerProps) => {
  return (
      <div className="w-full h-full relative rounded">
              <div style={{ backgroundImage: `url('${imageUrl}')`}}
                   className={`relative flex rounded justify-center items-center bg-cover bg-center ${height}`}>
                  <p className="z-20 text-6xl leading-none font-extrabold text-white">{title}</p>
              </div>
          <div className="z-10 rounded absolute top-0 bottom-0 left-0 right-0" style={{ background: 'linear-gradient(0deg, rgba(31, 41, 55, 0.4), rgba(31, 41, 55, 0.4))' }} />
      </div>
  )
}