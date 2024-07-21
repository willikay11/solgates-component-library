import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export enum MODAL_POSITION {
  CENTER = 'center',
  BOTTOM = 'bottom',
  TOP = 'top',
}
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: MODAL_POSITION.CENTER | MODAL_POSITION.BOTTOM | MODAL_POSITION.TOP;
  widthClass?: string;
  heightClass?: string;
  roundedBorder?: string;
  fullWidth?: boolean;
}

export const Modal = ({
  open,
  onClose,
  children,
  position,
  widthClass = 'w-96',
  heightClass = 'h-fit',
  roundedBorder = 'rounded-[10px]',
  fullWidth = false,
}: ModalProps) => {
  let positionClass = 'inset-0';

  if (position === MODAL_POSITION.TOP) {
    positionClass = 'top-0 left-0 right-0';
  } else if (position === MODAL_POSITION.BOTTOM) {
    positionClass = 'bottom-[10px] left-0 right-0';
  }

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

        <Dialog.Overlay className="blur-sm fixed inset-0" />
        <div className={`fixed ${positionClass} overflow-y-auto`}>
          <div
            className={`flex min-h-full items-center justify-center mb-1 ${
              !fullWidth ? 'mx-[15px]' : ''
            } `}
          >
            <Transition.Child
              as={Fragment}
              enter="transition ease duration-500 transform"
              enterFrom="opacity-0 -translate-y-28"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-500 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-28"
            >
              <Dialog.Panel
                className={`${widthClass} ${roundedBorder} ${heightClass} transform bg-white p-[20px] text-left align-middle transition-all`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
