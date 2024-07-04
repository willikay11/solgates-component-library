import {
  Button,
  ButtonTypes,
  IconContainer,
  Modal,
  MODAL_POSITION,
  User6Line,
} from '../src';
import colors from 'tailwindcss/colors';
import React, { useState } from 'react';

const DefaultModal = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="inline-flex">
      <Modal open={open} onClose={() => setOpen(false)} {...props.args}>
        <div className="flex flex-col justify-center items-center">
          <IconContainer bgColor="bg-red-50" borderRadius="rounded-full">
            <User6Line color={colors.red['500']} />
          </IconContainer>

          <p className="text-xs leading-5 font-bold text-gray-800 mt-2.5">
            Kindly note
          </p>

          <p className="text-xs leading-4 font-normal text-gray-600 mt-2.5">
            In order to place the bid, you will need to pay KES. 3,400.00 which
            is 20% of the total selling price of the item.
          </p>

          <div className="w-full grid gap-4 grid-cols-2 mt-2.5 ">
            <Button
              onClick={() => setOpen(false)}
              type={ButtonTypes.primary}
              block
              ghost
            >
              Cancel
            </Button>
            <Button
              onClick={() => setOpen(false)}
              type={ButtonTypes.primary}
              block
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
      <Button type={ButtonTypes.primary} onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </div>
  );
};

export { DefaultModal };
