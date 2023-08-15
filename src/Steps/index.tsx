import React from 'react';
import Step from './components/Step';
import { StepStatus } from './components/ProgressDot';

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
      className={`flex h-full ${
        direction === 'horizontal' ? 'flex-row' : 'flex-col'
      } justify-between`}
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