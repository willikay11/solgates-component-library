// @ts-nocheck
import React, { isValidElement, ReactNode } from 'react';
import Img, { CloudimageProvider } from 'react-cloudimage-responsive';
import { Button, ButtonTypes } from './Button';

const cloudImageConfig = {
  token: 'cyqqqhlxia',
  baseURL: 'https://cyqqqhlxia.cloudimg.io/_solgates_/',
};

export interface PageBannerProps {
  imageUrl: string;
  content?: ReactNode;
  title?: string;
  onClick?: () => void;
  name?: string;
  buttonName?: string;
  showOverlay?: boolean;
}

export const PageBanner = ({
  imageUrl,
  content,
  title,
  name,
  buttonName,
  onClick,
  showOverlay = true,
}: PageBannerProps) => {
  return (
    <div className="w-full h-auto rounded">
      <CloudimageProvider config={cloudImageConfig}>
        <div className="h-auto relative">
          {isValidElement(content) ? (
            content
          ) : (
            <Img
              src={imageUrl}
              height="100%"
              doNotReplaceURL
              className="relative rounded bg-cover bg-center w-full h-full"
            />
          )}
          <div
            className={`flex justify-center items-center rounded absolute top-0 bottom-0 left-0 right-0 ${
              !showOverlay ? 'hidden' : ''
            }`}
            style={{
              background:
                'linear-gradient(0deg, rgba(31, 41, 55, 0.4), rgba(31, 41, 55, 0.4))',
            }}
          >
            {title && (
              <p className="absolute text-6xl leading-none font-extrabold text-white">
                {title}
              </p>
            )}
          </div>
        </div>
      </CloudimageProvider>

      {(name || buttonName) && (
        <div className="mt-2.5">
          <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">
            {name}
          </p>
          {buttonName && (
            <Button
              onClick={() => onClick?.()}
              className="py-0"
              type={ButtonTypes.link}
            >
              {buttonName}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
