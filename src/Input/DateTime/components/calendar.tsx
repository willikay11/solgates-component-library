import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { CloseButton } from '@headlessui/react';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Button } from './button';
import { ArrowLeftSLine, ArrowRightSLine } from '../../../Icons';
import { getDayClassName } from '../../../../utils/classNames';
import { DPCalendar } from '@rehookify/datepicker/dist/types/calendar';

import './calendar.css';

interface CalendarProps {
  calendar: DPCalendar;
  weekDays: string[];
  subtractOffset: ReactNode;
  addOffset: ReactNode;
  dayButton: any;
  removeArrow?: 'left' | 'right';
  close?: boolean;
  onClose?: () => void;
}

export const Calendar: FC<CalendarProps> = ({
  calendar,
  weekDays,
  subtractOffset,
  addOffset,
  dayButton,
  removeArrow,
  close = true,
  onClose,
}) => {
  const { month, year, days } = calendar;

  return (
    <Section>
      <SectionHeader>
        {removeArrow !== 'left' ? (
          <Button
            className="w-8 absolute left-0"
            {...subtractOffset({ months: 1 })}
          >
            <ArrowLeftSLine size={20} />
          </Button>
        ) : null}
        <p className="text-center text-xs">{month}</p>
        {removeArrow !== 'right' ? (
          <Button
            as="CloseButton"
            className="w-8 absolute right-0"
            {...addOffset({ months: 1 })}
          >
            <ArrowRightSLine size={20} />
          </Button>
        ) : null}
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
            className={getDayClassName('w-full text-xs', d)}
            {...dayButton(d)}
          >
            {d.day}
          </Button>
        ))}
      </main>
    </Section>
  );
};
