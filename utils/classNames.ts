import { DPDay, DPMonth, DPYear } from "@rehookify/datepicker";
import clsx from "clsx";

export const getDayClassName = (
    className: string,
    { selected, disabled, inCurrentMonth }: DPDay
) =>
    clsx(
        className,
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