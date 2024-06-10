import React from 'react';
import { ArrowLeftLine, ArrowRightSLine } from './Icons';
import colors from './Colors';
import clsx from 'clsx';

interface BreadCrumb {
  title: string;
  active: boolean;
  onClick?: () => void;
}
export interface BreadCrumbsProps {
  items: BreadCrumb[];
}

const NormalBreadCrumbs = ({ items }: BreadCrumbsProps) => {
  return (
    <div className="inline-flex">
      {items.map((item, index) => (
        <span
          key={index}
          className={clsx(`text-xs leading-4 font-medium`, {
            'text-primary ml-1': item.active,
            'text-gray-800': !item.active,
          })}
        >
          {item.title} {index < items.length - 1 ? ' / ' : null}
        </span>
      ))}
    </div>
  );
};

const AdminBreadCrumbs = ({ items }: BreadCrumbsProps) => {
  return (
    <div className="inline-flex items-center">
      {items.map((item, index) => (
        <div className="inline-flex items-center" key={index}>
          {index === 0 && (
            <div
              className="mr-3 cursor-pointer"
              onClick={() => item?.onClick?.()}
            >
              <ArrowLeftLine size={16} color={colors.gray['500']} />
            </div>
          )}
          <span
            className={clsx(`text-lg leading-7`, {
              'font-semibold text-primary': item.active,
              'cursor-pointer font-medium text-gray-600 hover:text-orange-600 mr-2':
                !item.active,
            })}
            onClick={() => item?.onClick?.()}
          >
            {item.title}
          </span>
          {index < items.length - 1 && (
            <ArrowRightSLine
              size={16}
              color={colors.gray['500']}
              className="mr-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const BreadCrumbs = {
  normal: NormalBreadCrumbs,
  admin: AdminBreadCrumbs,
};
