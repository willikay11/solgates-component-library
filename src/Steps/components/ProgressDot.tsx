import React from 'react';
import { Checkline } from '../../Icons';
import colors from '../../Colors';
import clsx from 'clsx';

export enum StepStatus {
  current = 'current',
  future = 'future',
  finished = 'finished',
}

export interface ProgressDotProps {
  status: StepStatus;
  direction?: 'vertical' | 'horizontal';
  isLastStep?: boolean;
}

const ProgressDot = ({ status, direction, isLastStep }: ProgressDotProps) => {
  if (status === StepStatus.finished) {
    return (
      <div
        className={clsx(
          "flex justify-center z-10 items-center rounded-[50%] bg-primary h-10 w-10 after:content-[''] after:absolute after:block after:bg-primary",
          {
            'after:h-[100%] after:w-[1px] after:top-[0px]':
              direction === 'vertical',
            'after:h-[1px] after:w-[100%] after:left-[0px]':
              direction === 'horizontal',
          }
        )}
      >
        <Checkline color={colors.white} size={24} className="z-20" />
      </div>
    );
  }

  if (status === StepStatus.future) {
    return (
      <div
        className={clsx(
          "flex justify-center z-10 items-center rounded-[50%] bg-white h-10 w-10 border-2 border-gray-300 after:content-[''] after:absolute after:block after:bg-gray-300",
          {
            'after:h-[100%] after:w-[1px] after:top-[40px]':
              direction === 'vertical' && !isLastStep,
            'after:h-[1px] after:w-[100%] after:left-[40px]':
              direction === 'horizontal' && !isLastStep,
          }
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex justify-center items-center z-10 rounded-[50%] bg-white h-10 w-10 border-2 border-primary after:content-[''] after:absolute after:block after:bg-gray-300",
        {
          'after:h-[100%] after:w-[1px] after:top-[40px]':
            direction === 'vertical' && !isLastStep,
          'after:h-[1px] after:w-[100%] after:left-[40px]':
            direction === 'horizontal' && !isLastStep,
        }
      )}
    >
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
  );
};

export default ProgressDot;
