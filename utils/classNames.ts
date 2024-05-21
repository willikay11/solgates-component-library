import { DPDay, DPMonth, DPYear } from "@rehookify/datepicker";
import clsx from "clsx";

export const getDayClassName = (
    className: string,
    { selected, disabled, inCurrentMonth, range }: DPDay
) =>
    clsx(
        'day',
        className,
        range,
        {
            'bg-orange-600 text-white hover:bg-slate-700 opacity-100': selected,
            'opacity-25 cursor-not-allowed': disabled,
            'text-gray-300': !inCurrentMonth,
            'text-gray-800': inCurrentMonth,
        },
    );

export const getMonthClassName = (
    className: string,
    { selected, disabled }: DPMonth
) => clsx(
    className,
    {
        'bg-orange-600 text-white hover:bg-slate-700 opacity-100': selected,
        'opacity-25 cursor-not-allowed': disabled,
    }
);

export const getYearsClassName = (
    className: string,
    { selected, disabled }: DPYear
) => clsx(
    className,
    {
        'bg-orange-600 text-white hover:bg-slate-700 opacity-100': selected,
        'opacity-25 cursor-not-allowed': disabled,
    }
)

export const pickerClassName = (showDatePicker: boolean) => clsx(
    'absolute mt-2 shadow-lg rounded-[5px] pt-2 pb-2',
    {
        'hidden': !showDatePicker,
        'visible': showDatePicker
    }
)