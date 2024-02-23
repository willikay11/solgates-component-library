import React, { isValidElement, ReactNode } from 'react';
import { Input } from './Input';
import { ArrowDownSLine } from './Icons';

interface stat {
  icon: ReactNode;
  span: number;
  title: string;
  value: string;
}

export interface StatisticsProps {
  title: string | ReactNode;
  stats: stat[];
}

function COL_SPANS(span: number) {
  switch(span) {
    case 1:
      return 'col-span-1';
    case 2:
      return 'col-span-2';
    case 3:
      return 'col-span-3';
    case 4:
      return 'col-span-4';
    case 5:
      return 'col-span-5';
    case 6:
      return 'col-span-6';
    case 7:
      return 'col-span-7';
    case 8:
      return 'col-span-8';
    case 9:
      return 'col-span-9';
    case 10:
      return 'col-span-10';
    case 11:
      return 'col-span-11';
    default:
      return 'col-span-12';
  }
}

export const Statistics = ({ title, stats }: StatisticsProps) => {
  return (
    <div className="rounded w-full bg-white border-[1px] border-gray-200 p-3">
      <div className="flex flex-row justify-between mb-3.5">
        <div className="flex flex-1 items-center">
          {isValidElement(title) ? (
            title
          ) : (
            <span className="text-lg leading-7 font-bold text-gray-800">
              {title}
            </span>
          )}
        </div>
        <div className="flex flex-2">
          <Input.Select
            items={[{ label: 'Last 7 Days', value: '7' }]}
            arrowIcon={<ArrowDownSLine size={14} />}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-1">
        {stats.map((stat, index) => (
          <div key={index} className={`grid ${COL_SPANS(stat.span)}`}>
            <div className="flex flex-row justify-start items-center">
              <div className="flex flex-col">
                <div className="mb-[5px]">{stat.icon}</div>
                <div className="mb-[5px]">
                  <span className="text-xs leading-4 font-normal text-gray-600">
                    {stat.title}
                  </span>
                </div>

                <div>
                  <span className="text-lg leading-7 font-bold text-gray-800">
                    {stat.value}
                  </span>
                </div>
              </div>
              {/*{*/}
              {/*    stats.length -1 !== index && <div className="border-r-[1px] border-gray-300 w-1/4 h-1/3" />*/}
              {/*}*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
