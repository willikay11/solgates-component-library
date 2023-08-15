import React from 'react';
import ProgressDot, { StepStatus } from './ProgressDot';

interface StepProps {
  title: string;
  description: string;
  status: StepStatus;
  labelPlacement?: 'vertical' | 'horizontal';
}

const Step = ({ title, description, status, labelPlacement = 'horizontal' }: StepProps) => {
  return (
    <div className={`flex ${labelPlacement === 'horizontal' ? 'flex-row' : 'flex-col'}`}>
      <ProgressDot status={status} />
      <div className={`flex justify-center flex-col ${labelPlacement === 'horizontal' ? 'ml-2.5' : 'mt-2'}`}>
        <p className="text-gray-900 text-xs leading-4 font-medium mb-1">
          {title}
        </p>
        <p className="text-gray-400 text-xs leading-4 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Step;
