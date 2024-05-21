import React, { FC, useEffect, useRef, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Input } from '../index';
import { TextInputProps } from '../text';
import { Calendar } from './components';
import { CloseButton, Popover } from '@headlessui/react';
import { DatePreset, Presets } from './components/presets';

export interface DatePickerProps {
  textProps: Omit<TextInputProps, 'onChange'>;
  disabledDate?: Date;
  presets?: DatePreset[];
}

export const SingleDatePicker: FC<DatePickerProps> = ({
  textProps,
  disabledDate,
  presets,
}) => {
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
    dates: {
      minDate: disabledDate,
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
      <Popover.Panel
        anchor="bottom start"
        className="w-fit bg-white mt-2 shadow-lg h-[20.635rem] rounded-[5px] pt-2 pb-2"
      >
        <CloseButton className="hidden" ref={closeButtonRef} />
        <div className="inline-flex">
          {presets?.length ? (
            <Presets
              presets={presets}
              onClick={(dates) => onDatesChange(dates)}
            />
          ) : null}
          <Calendar
            calendar={calendars[0]}
            weekDays={weekDays}
            subtractOffset={subtractOffset}
            addOffset={addOffset}
            dayButton={dayButton}
          />
        </div>
      </Popover.Panel>
    </Popover>
  );
};
