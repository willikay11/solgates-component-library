import { FC, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Button, Calendar, Section, SectionHeader } from './components';
import { getDayClassName } from '../../../utils/classNames';
import { ArrowLeftSLine, ArrowRightSLine } from '../../Icons';
import { Input } from '../index';
import clsx from 'clsx';
import { TextInputProps } from '../text';

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

  const { month, year, days } = calendars[0];

  const datePickerClassName = clsx(
    'absolute mt-2 shadow-lg rounded-[5px] pt-2 pb-2',
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
        <Section>
          <SectionHeader>
            <Button className="w-8" {...subtractOffset({ months: 1 })}>
              <ArrowLeftSLine size={20} />
            </Button>
            <p className="text-center text-xs">{month}</p>
            <Button className="w-8" {...addOffset({ months: 1 })}>
              <ArrowRightSLine size={20} />
            </Button>
          </SectionHeader>
          <Calendar className="mb-2 items-center h-8">
            {weekDays.map((d) => (
              <p className="text-xs text-center">{d}</p>
            ))}
          </Calendar>
          <Calendar>
            {days.map((d) => (
              <Button
                key={d.$date.toString()}
                className={getDayClassName('w-8 text-xs', d)}
                {...dayButton(d)}
              >
                {d.day}
              </Button>
            ))}
          </Calendar>
        </Section>
      </div>
    </div>
  );
};
