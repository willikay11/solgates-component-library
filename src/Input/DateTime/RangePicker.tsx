import React, { FC, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Button, Calendar, Section, SectionHeader } from './components';
import {
  ArrowLeftLine,
  ArrowLeftRightLine,
  ArrowLeftSLine,
  ArrowRightSLine,
} from '../../Icons';
import { getDayClassName } from '../../../utils/classNames';
import colors from 'tailwindcss/colors';

interface Props {
  autoComplete?: boolean;
  disabled?: boolean;
  prefixIcon;
  suffixIcon;
}
export const RangePicker: FC<Props> = ({
  autoComplete = true,
  disabled = false,
  prefixIcon,
  suffixIcon,
}) => {
  const now = new Date();
  const M = now.getMonth();
  const Y = now.getFullYear();
  const D = now.getDate();
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [offsetDate, onOffsetChange] = useState<Date>(now);
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
    offsetDate,
    onOffsetChange,
    dates: {
      mode: 'range',
    },
    calendar: {
      offsets: [-1, 1],
    },
  });

  return (
    <>
      <div
        className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-orange-500 hover:border-orange-500 items-center`}
      >
        {prefixIcon && <div className="flex">{prefixIcon}</div>}
        <input
          type="text"
          placeholder="Select start date"
          className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800 focus:border-transparent focus:ring-0`}
          disabled={disabled}
          autoComplete={!autoComplete ? 'new-password' : ''}
        />
        <ArrowLeftRightLine size={32} color={colors.gray['400']} />
        <input
          type="text"
          placeholder="Select end date"
          className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800 focus:border-transparent focus:ring-0`}
          disabled={disabled}
          autoComplete={!autoComplete ? 'new-password' : ''}
        />
      </div>
      <main className="inline-flex">
        <Calendar
          removeArrow="right"
          calendar={calendars[1]}
          weekDays={weekDays}
          subtractOffset={subtractOffset}
          addOffset={addOffset}
          dayButton={dayButton}
        />
        <Calendar
          removeArrow="left"
          calendar={calendars[0]}
          weekDays={weekDays}
          subtractOffset={subtractOffset}
          addOffset={addOffset}
          dayButton={dayButton}
        />
        {/*<Section>*/}
        {/*  <SectionHeader>*/}
        {/*    <Button className="w-8" {...subtractOffset({ months: 1 })}>*/}
        {/*      <ArrowLeftSLine size={20} />*/}
        {/*    </Button>*/}
        {/*    <p className="text-center text-xs">{month1}</p>*/}
        {/*  </SectionHeader>*/}
        {/*  <Calendar className="mb-2 items-center h-8">*/}
        {/*    {weekDays.map((d) => (*/}
        {/*      <p className="text-xs text-center">{d}</p>*/}
        {/*    ))}*/}
        {/*  </Calendar>*/}
        {/*  <Calendar>*/}
        {/*    {days1.map((d) => (*/}
        {/*      <Button*/}
        {/*        key={d.$date.toString()}*/}
        {/*        className={getDayClassName('w-8 text-xs', d)}*/}
        {/*        {...dayButton(d)}*/}
        {/*      >*/}
        {/*        {d.day}*/}
        {/*      </Button>*/}
        {/*    ))}*/}
        {/*  </Calendar>*/}
        {/*</Section>*/}

        {/*<Section>*/}
        {/*  <SectionHeader>*/}
        {/*    <p className="text-center text-xs">{month}</p>*/}
        {/*    <Button className="w-8" {...addOffset({ months: 1 })}>*/}
        {/*      <ArrowRightSLine size={20} />*/}
        {/*    </Button>*/}
        {/*  </SectionHeader>*/}
        {/*  <Calendar className="mb-2 items-center h-8">*/}
        {/*    {weekDays.map((d) => (*/}
        {/*      <p className="text-xs text-center">{d}</p>*/}
        {/*    ))}*/}
        {/*  </Calendar>*/}
        {/*  <Calendar>*/}
        {/*    {days.map((d) => (*/}
        {/*      <Button*/}
        {/*        key={d.$date.toString()}*/}
        {/*        className={getDayClassName('w-8 text-xs', d)}*/}
        {/*        {...dayButton(d)}*/}
        {/*      >*/}
        {/*        {d.day}*/}
        {/*      </Button>*/}
        {/*    ))}*/}
        {/*  </Calendar>*/}
        {/*</Section>*/}
      </main>
    </>
  );
};
