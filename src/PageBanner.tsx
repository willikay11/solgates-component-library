// @ts-nocheck
import React, { isValidElement, ReactNode } from 'react';
import Img, {
  CloudimageProvider,
  BackgroundImg,
} from 'react-cloudimage-responsive';
import { Button, ButtonTypes } from './Button';

const cloudImageConfig = {
  token: 'cyqqqhlxia',
  baseURL: 'https://cyqqqhlxia.cloudimg.io/_solgates_/',
};

export enum CONTENT_POSITION {
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomLeft',
  topRight = 'topRight',
  topLeft = 'topLeft',
  center = 'center',
}

export interface PageBannerProps {
  type?: 'image' | 'backgroundImage';
  imageUrl?: string;
  content?: ReactNode;
  contentPosition?: CONTENT_POSITION;
  title?: string;
  onClick?: () => void;
  name?: string;
  buttonName?: string;
  showOverlay?: boolean;
}

export const PageBanner = ({
  type = 'image',
  imageUrl,
  content,
  contentPosition = CONTENT_POSITION.center,
  title,
  name,
  buttonName,
  onClick,
  showOverlay = true,
}: PageBannerProps) => {
  let position = 'justify-center items-center';

  if (contentPosition === CONTENT_POSITION.bottomRight) {
    position = 'justify-end items-end'
  }

  if (contentPosition === CONTENT_POSITION.bottomLeft) {
    position = 'justify-start items-end'
  }

  if (contentPosition === CONTENT_POSITION.topLeft) {
    position = 'justify-start items-start'
  }

  if (contentPosition === CONTENT_POSITION.topRight) {
    position = 'justify-end items-start'
  }

  return (
    <div className="w-full h-full rounded">
      <CloudimageProvider config={cloudImageConfig}>
        <div
          onClick={() => onClick?.()}
          className={`${
            type === 'image' ? 'h-auto' : 'h-full'
          } relative cursor-pointer`}
        >
          {type === 'image' && imageUrl ? (
            <Img src={imageUrl} doNotReplaceURL />
          ) : (
            imageUrl && (
              <BackgroundImg
                src={imageUrl}
                doNotReplaceURL
                className="relative rounded bg-cover bg-center w-full h-full"
              ></BackgroundImg>
            )
          )}
          <div
            className={`flex flex-row ${position} p-2.5 rounded absolute top-0 bottom-0 left-0 right-0 ${
              !showOverlay ? 'hidden' : ''
            }`}
            style={{
              background:
                'linear-gradient(0deg, rgba(31, 41, 55, 0.4), rgba(31, 41, 55, 0.4))',
            }}
          >
            {content}
            {title && (
              <p className="text-6xl leading-none font-extrabold text-white">
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
