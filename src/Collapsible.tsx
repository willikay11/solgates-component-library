import React, {ReactNode} from "react";
import { Disclosure } from '@headlessui/react'

export interface CollapsibleProps {
  panelTitle: string;
  panelContent: ReactNode;
  open?: boolean;
  bordered?: boolean;
  showTitleDivider?: boolean;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
}

export const Collapsible = ({ closeIcon, openIcon, panelTitle, panelContent, showTitleDivider = true, open = false, bordered = true }: CollapsibleProps) => {
   return(
      <div className="w-full max-w-md rounded-2xl bg-white">
          <Disclosure defaultOpen={open}>
            {({ open }) => (
                <div className={`rounded bg-white ${bordered ? 'border border-gray-200' : ''}`}>
                  <Disclosure.Button className={`flex w-full justify-between p-[15px] focus:outline-none ${open && showTitleDivider ? 'border-b-[1px]' : ''}`}>
                    <span className="text-xs leading-4 font-semibold text-gray-800">{panelTitle}</span>
                    {
                      open ? closeIcon : openIcon
                    }
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-[15px] pb-2 text-sm text-gray-500">
                    {panelContent}
                  </Disclosure.Panel>
                </div>
            )}
          </Disclosure>
        </div>
  )
}