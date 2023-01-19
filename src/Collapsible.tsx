import React, {ReactNode} from "react";
import { Disclosure } from '@headlessui/react'

export interface CollapsibleProps {
  open?: boolean;
  closeIcon: ReactNode,
  openIcon: ReactNode,
  panelTitle: string;
  panelContent: ReactNode,
  bordered?: boolean,
}

export const Collapsible = ({ closeIcon, openIcon, panelTitle, panelContent, open = false, bordered = true }: CollapsibleProps) => {
  return(
      <div className="w-full max-w-md rounded-2xl bg-white">
          <Disclosure defaultOpen={open}>
            {({ open }) => (
                <div className={`rounded bg-white border ${bordered ? 'border-gray-200' : ''}`}>
                  <Disclosure.Button className={`flex w-full justify-between p-[15px] focus:outline-none ${open ? 'border-b-[1px]' : ''}`}>
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