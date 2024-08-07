import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import { Calendar } from './components';
import { ArrowLeftRightLine } from '../../Icons';
import colors from 'tailwindcss/colors';
import { CloseButton, Popover } from '@headlessui/react';
import { DatePreset, Presets } from './components/presets';

interface Props {
  autoComplete?: boolean;
  disabled?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  presets?: DatePreset[];
}
export const RangePicker: FC<Props> = ({
  autoComplete = true,
  disabled = false,
  prefixIcon,
  presets,
}) => {
  const closeButtonRef = useRef<HTMLElement | null>(null);
  const now = new Date();
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [offsetDate, onOffsetChange] = useState<Date>(now);
  const [closePopOver, setClosePopOver] = useState<boolean>(false);
  const {
    data: { calendars, weekDays, formattedDates },
    propGetters: { dayButton, addOffset, subtractOffset },
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates);
      if (dates.length >= 2) {
        setClosePopOver(true);
      }
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

  useEffect(() => {
    if (closePopOver) {
      closeButtonRef?.current?.click();
      setClosePopOver(false);
    }
  }, [closePopOver]);

  return (
    <Popover>
      <Popover.Button>
        <div
          className={`flex w-full h-[3.125rem] p-2.5 rounded bg-white border border-gray-200 focus-within:border-primary hover:border-primary items-center`}
        >
          {prefixIcon && <div className="flex">{prefixIcon}</div>}
          <input
            type="text"
            placeholder="Select start date"
            className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800 focus:border-transparent focus:ring-0`}
            disabled={disabled}
            autoComplete={!autoComplete ? 'new-password' : ''}
            value={formattedDates[0]}
          />
          <ArrowLeftRightLine size={32} color={colors.gray['400']} />
          <input
            type="text"
            placeholder="Select end date"
            className={`ml-2 outline-0 w-full placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-gray-500 bg-transparent text-xs text-gray-800 focus:border-transparent focus:ring-0`}
            disabled={disabled}
            autoComplete={!autoComplete ? 'new-password' : ''}
            value={formattedDates[1]}
          />
        </div>
      </Popover.Button>
      <Popover.Panel
        anchor="bottom start"
        className="w-fit mt-2 bg-white shadow-lg h-[20.635rem] rounded-[5px] pt-2 pb-2"
      >
        <CloseButton className="hidden" ref={closeButtonRef} />
        <main className="inline-flex">
          {presets?.length ? (
            <Presets
              presets={presets}
              onClick={(dates) => onDatesChange(dates)}
            />
          ) : null}
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
        </main>
      </Popover.Panel>
    </Popover>
  );
};
