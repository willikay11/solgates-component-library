import React, { ReactNode } from 'react';
import { CONTENT_POSITION } from '../PageBanner';

interface OverlayProps {
  showOverlay: boolean;
  contentPosition?: CONTENT_POSITION;
  content?: ReactNode;
  title?: string;
}

const Overlay = ({
  showOverlay,
  contentPosition,
  content,
  title,
}: OverlayProps) => {
  let position = 'justify-center items-center';

  if (contentPosition === CONTENT_POSITION.bottomRight) {
    position = 'justify-end items-end';
  }

  if (contentPosition === CONTENT_POSITION.bottomLeft) {
    position = 'justify-start items-end';
  }

  if (contentPosition === CONTENT_POSITION.topLeft) {
    position = 'justify-start items-start';
  }

  if (contentPosition === CONTENT_POSITION.topRight) {
    position = 'justify-end items-start';
  }
  return (
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
  );
};

export default Overlay;
