import React from 'react';
import { Checkline } from '../../Icons';
import colors from '../../Colors';

export enum StepStatus {
  current = 'current',
  future = 'future',
  finished = 'finished',
}

export interface ProgressDotProps {
  status: StepStatus;
}

const ProgressDot = ({ status }: ProgressDotProps) => {
  if (status === StepStatus.finished) {
    return (
      <div className="flex justify-center z-10 items-center rounded-full bg-orange-600 h-10 w-10">
        <Checkline color={colors.white} size={24} />
      </div>
    );
  }

  if (status === StepStatus.future) {
    return (
      <div className="flex justify-center z-10 items-center rounded-full bg-white h-10 w-10 border-2 border-gray-300" />
    );
  }

  return (
    <div className="flex justify-center items-center z-10 rounded-full bg-white h-10 w-10 border-2 border-orange-600">
      <div className="h-2 w-2 rounded-full bg-orange-600" />
    </div>
  );
};

export default ProgressDot;
