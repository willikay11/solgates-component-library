import React, { ReactNode, useState } from 'react';
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';

export enum PopOverType {
  primary = 'primary',
  danger = 'danger',
  default = 'default',
}

export interface PopOverProps {
  children: ReactNode;
  content: ReactNode;
  type?: PopOverType.primary | PopOverType.danger | PopOverType.default;
  placement?:
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'top'
    | 'top-start'
    | 'top-end';
}

export const PopOver = ({
  children,
  content,
  type = PopOverType.default,
  placement = 'bottom',
}: PopOverProps) => {
  let [referenceElement, setReferenceElement] = useState<any>(null);
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: 'fixed',
    placement,
  });

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(referenceElement?.current);
    !isOpen && referenceElement?.click();
  };

  // const handleLeave = (isOpen: boolean) => {
  //   setTimeout(() => {
  //     isOpen && referenceElement?.click()
  //   }, 200)
  // }

  return (
    <div className="w-full max-w-sm relative bg-white">
      <Popover>
        {({ open }) => (
          <div onMouseEnter={() => handleEnter(open)}>
            <Popover.Button
              id="button"
              aria-describedby="tooltip"
              ref={setReferenceElement}
              className="focus-visible:outline-0"
            >
              {children}
            </Popover.Button>
            {/*<Transition*/}
            {/*  as={Fragment}*/}
            {/*  enter="transition ease-out duration-200"*/}
            {/*  enterFrom="opacity-0 translate-y-0"*/}
            {/*  enterTo="opacity-100 translate-y-0"*/}
            {/*  leave="transition ease-in duration-150"*/}
            {/*  leaveFrom="opacity-100 translate-y-0"*/}
            {/*  leaveTo="opacity-0 translate-y-1"*/}
            {/*>*/}
            <Popover.Panel
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              id="tooltip"
              role="tooltip"
              className={`absolute z-20 rounded shadow-lg mt-1.5 ${
                type === PopOverType.primary ? 'bg-orange-600' : type === PopOverType.danger ? 'bg-red-600' : 'bg-white'
              } `}
            >
              <div className="overflow-hidden p-2.5">{content}</div>
              <div id="arrow" data-popper-arrow></div>
            </Popover.Panel>
            {/*</Transition>*/}
          </div>
        )}
      </Popover>
    </div>
  );
};
