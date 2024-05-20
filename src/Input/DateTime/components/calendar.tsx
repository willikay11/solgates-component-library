import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Button } from './button';
import { ArrowLeftSLine, ArrowRightSLine } from '../../../Icons';
import { getDayClassName } from '../../../../utils/classNames';
import { DPCalendar } from '@rehookify/datepicker/dist/types/calendar';

interface CalendarProps {
  picker: 'single' | 'range',
  calendar: DPCalendar;
  weekDays: string[];
  subtractOffset: ReactNode;
  addOffset: ReactNode;
  dayButton: any;
}

export const Calendar: FC<CalendarProps> = ({
    picker = 'single',
  calendar,
  weekDays,
  subtractOffset,
  addOffset,
  dayButton,
}) => {
  const { month, year, days } = calendar;

  return (
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
      <main className="grid grid-cols-7 gap-y-2 pl-3 pr-3 mb-2 items-center h-8">
        {weekDays.map((d) => (
          <p className="text-xs text-center">{d}</p>
        ))}
      </main>
      <main className="grid grid-cols-7 gap-y-2 pl-3 pr-3 mb-2 items-center h-8">
        {days.map((d) => (
          <Button
            key={d.$date.toString()}
            className={getDayClassName('w-8 text-xs', d)}
            {...dayButton(d)}
          >
            {d.day}
          </Button>
        ))}
      </main>
    </Section>
  );
};
