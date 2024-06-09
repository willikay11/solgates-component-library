import React from 'react';
import Step from './components/Step';
import { StepStatus } from './components/ProgressDot';
import clsx from "clsx";

export interface StepsProps {
  initial: number;
  direction: 'vertical' | 'horizontal';
  labelPlacement: 'vertical' | 'horizontal';
  items: {
    title: string;
    description: string;
  }[];
}

export const Steps = ({
  items,
  initial,
  labelPlacement,
  direction = 'horizontal',
}: StepsProps) => {
  return (
    <div
      className={clsx('flex justify-between', {
        'flex-row w-full': direction === 'horizontal',
        'flex-col h-full': direction === 'vertical'
      })}
    >
      {items.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          description={step.description}
          status={
            index === initial
              ? StepStatus.current
              : index < initial
              ? StepStatus.finished
              : StepStatus.future
          }
          labelPlacement={labelPlacement}
          isLastStep={index + 1 === items.length}
          direction={direction}
        />
      ))}
    </div>
  );
};
