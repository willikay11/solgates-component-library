import { FC, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Input } from '../index';
import clsx from 'clsx';
import { TextInputProps } from '../text';
import { Calendar } from './components';

export interface DatePickerProps {
  textProps: Omit<TextInputProps, 'onChange'>;
}
export const SingleDatePicker: FC<DatePickerProps> = ({ textProps }) => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const {
    data: { calendars, weekDays, formattedDates, months, years },
    propGetters: { dayButton, addOffset, subtractOffset },
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates);
      setShowDatePicker(false);
    },
    calendar: {
      startDay: 1,
    },
  });

  const datePickerClassName = clsx(
    'absolute mt-2 shadow-lg h-[20.635rem] rounded-[5px] pt-2 pb-2',
    {
      hidden: !showDatePicker,
      visible: showDatePicker,
    }
  );

  return (
    <div className="relative">
      <Input.Text
        readOnly={true}
        onClick={() => setShowDatePicker(true)}
        value={formattedDates[0]}
        {...textProps}
      />
      <div className={datePickerClassName}>
        <Calendar
          calendar={calendars[0]}
          weekDays={weekDays}
          subtractOffset={subtractOffset}
          addOffset={addOffset}
          dayButton={dayButton}
        />
      </div>
    </div>
  );
};
