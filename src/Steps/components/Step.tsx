import React from 'react';
import ProgressDot, { StepStatus } from './ProgressDot';

interface StepProps {
  title: string;
  description: string;
  status: StepStatus;
  isLastStep?: boolean;
  labelPlacement?: 'vertical' | 'horizontal';
  direction?: 'vertical' | 'horizontal';
}

const Step = ({
  title,
  description,
  status,
  labelPlacement = 'horizontal',
  direction = 'horizontal',
  isLastStep = false,
}: StepProps) => {
  return (
    <div
      className={`flex flex-1 ${
        labelPlacement === 'horizontal' ? 'flex-row' : 'flex-col'
      } relative`}
    >
      <div
        className={`flex ${
          labelPlacement === 'horizontal' ? 'flex-row' : 'flex-col'
        } ${
          !isLastStep
            ? `w-full after:content-[''] after:absolute after:block ${
                direction === 'horizontal'
                  ? 'after:top-[20px] after:h-[1px] after:w-[100%]'
                  : 'after:left-[20px] after:w-[1px] after:h-[100%]'
              } ${
                status === StepStatus.finished
                  ? 'after:bg-orange-600'
                  : 'after:bg-gray-300'
              } after:start-full`
            : 'w-full flex-row'
        }`}
      >
        <ProgressDot status={status} />
        <div
          className={`flex ${
            direction === 'horizontal' ? 'justify-center' : 'justify-start'
          } bg-white z-10 flex-col ${
            labelPlacement === 'horizontal' ? 'pl-2.5 pr-2' : 'pt-2'
          }`}
        >
          <p
            className={`${
              status === StepStatus.current
                ? 'text-orange-600'
                : status === StepStatus.finished
                ? 'text-gray-900'
                : 'text-gray-400'
            } text-xs leading-4 font-medium mb-1`}
          >
            {title}
          </p>
          <p className={`text-gray-400 text-xs leading-4 font-light`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
