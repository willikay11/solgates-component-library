import React, { FC, useEffect, useRef, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Input } from '../index';
import clsx from 'clsx';
import { TextInputProps } from '../text';
import { Calendar } from './components';
import { CloseButton, Popover, useClose } from '@headlessui/react';

export interface DatePickerProps {
  textProps: Omit<TextInputProps, 'onChange'>;
}
export const SingleDatePicker: FC<DatePickerProps> = ({ textProps }) => {
  const closeButtonRef = useRef<HTMLElement | null>(null);
  const [closePopOver, setClosePopOver] = useState<boolean>(false);
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const {
    data: { calendars, weekDays, formattedDates, months, years },
    propGetters: { dayButton, addOffset, subtractOffset },
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates);
      if (dates.length >= 1) {
        setClosePopOver(true);
      }
    },
    calendar: {
      startDay: 1,
    },
  });

  useEffect(() => {
    if (closePopOver) {
      closeButtonRef?.current?.click();
      setClosePopOver(false);
    }
  }, [closePopOver]);

  return (
    <Popover className="relative">
      <Popover.Button>
        <Input.Text readOnly={true} value={formattedDates[0]} {...textProps} />
      </Popover.Button>
      <Popover.Panel anchor="bottom start" className="w-fit mt-2 shadow-lg h-[20.635rem] rounded-[5px] pt-2 pb-2">
        <CloseButton className="hidden" ref={closeButtonRef} />
        <Calendar
          calendar={calendars[0]}
          weekDays={weekDays}
          subtractOffset={subtractOffset}
          addOffset={addOffset}
          dayButton={dayButton}
        />
      </Popover.Panel>
    </Popover>
  );
};
