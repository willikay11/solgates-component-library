import { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';

export interface CollapsibleProps {
  panelTitle: string;
  panelContent: ReactNode;
  open?: boolean;
  bordered?: boolean;
  showTitleDivider?: boolean;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
  extraContent?: ReactNode;
  padding?: string;
}

export const Collapsible = ({
  closeIcon,
  openIcon,
  panelTitle,
  panelContent,
  showTitleDivider = true,
  open = false,
  bordered = true,
  extraContent,
  padding = 'p-[15px]',
}: CollapsibleProps) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white">
      <Disclosure defaultOpen={open}>
        {({ open }) => (
          <div
            className={`rounded bg-white ${
              bordered ? 'border border-gray-200' : ''
            }`}
          >
            <Disclosure.Button
              className={`${padding} flex w-full items-center justify-between focus:outline-none ${
                open && showTitleDivider ? 'border-b-[1px]' : ''
              }`}
            >
              <span className="text-xs truncate leading-4 font-semibold text-gray-800">
                {panelTitle}
              </span>
              <div className="flex flex-1 items-center justify-end">
                {extraContent && <div className="pr-2">{extraContent}</div>}
                {open ? closeIcon : openIcon}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${padding} pb-2 text-sm text-gray-500`}
            >
              {panelContent}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
