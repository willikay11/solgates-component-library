import React, {Fragment, ReactNode} from "react";
import { Dialog, Transition } from '@headlessui/react'

export interface ModalProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode,
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
      <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={onClose}>
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      >
                          <Dialog.Panel className="w-96 max-w-md transform overflow-hidden rounded-[10px] bg-white p-[20px] text-left align-middle transition-all">
                              {children}
                          </Dialog.Panel>
                      </Transition.Child>
                  </div>
              </div>
          </Dialog>
      </Transition>
  );
}