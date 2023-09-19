import React, { ReactNode } from 'react';
import Overlay from './overlay';
import PageBannerButton from './pageBannerButton';
import PageBannerImage from './pageBannerImage';

export enum CONTENT_POSITION {
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomLeft',
  topRight = 'topRight',
  topLeft = 'topLeft',
  center = 'center',
}

export interface PageBannerProps {
  imageUrl: string;
  content?: ReactNode;
  contentPosition?: CONTENT_POSITION;
  title?: string;
  onClick?: () => void;
  name?: string;
  buttonName?: string;
  showOverlay?: boolean;
}

const PageBanner = ({
  imageUrl,
  content,
  contentPosition = CONTENT_POSITION.center,
  title,
  name,
  buttonName,
  onClick,
  showOverlay = true,
}: PageBannerProps) => {
  return (
    <div className="w-full h-full rounded">
      <div
        onClick={() => onClick?.()}
        className="h-auto relative cursor-pointer"
      >
        <PageBannerImage image={imageUrl} />
        <Overlay
          showOverlay={showOverlay}
          content={content}
          title={title}
          contentPosition={contentPosition}
        />
      </div>
      <PageBannerButton name={name} buttonName={buttonName} onClick={onClick} />
    </div>
  );
};

export { PageBanner };
