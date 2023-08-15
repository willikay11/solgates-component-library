import React from 'react';
import Step from './components/Step';
import {StepStatus} from './components/ProgressDot';

export interface StepsProps {
  initial: number;
  direction: 'vertical' | 'horizontal';
  labelPlacement: 'vertical' | 'horizontal';
  items: {
    title: string;
    description: string;
  }[];
}
const Steps = ({ items, initial, labelPlacement }: StepsProps) => {
  return (
    <div className="flex flex-row justify-between">
      {items.map((step, index) => (
            <Step
                key={index}
                title={step.title}
                description={step.description}
                status={index === initial ? StepStatus.current : index < initial ? StepStatus.finished : StepStatus.future}
                labelPlacement={labelPlacement}
            />
      ))}
    </div>
  );
};

export default Steps;
