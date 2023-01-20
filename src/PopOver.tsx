import React, {Fragment, ReactNode} from "react";
import { Popover, Transition } from '@headlessui/react'

export interface PopOverProps {
    children: ReactNode,
    content: ReactNode,
}

export const PopOver = ({ children, content }: PopOverProps) => {
  return(
      <div className="fixed w-full max-w-sm px-4">
          <Popover className="relative">
              {({  }) => (
                  <>
                      <Popover.Button
                      >
                          {children}
                      </Popover.Button>
                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                      >
                          <Popover.Panel className="absolute">
                              <div className="overflow-hidden p-2.5 rounded shadow-lg ring-1 ring-black ring-opacity-5">
                                  {content}
                              </div>
                          </Popover.Panel>
                      </Transition>
                  </>
              )}
          </Popover>
      </div>
  )
}