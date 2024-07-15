import ProgressDot, { StepStatus } from './ProgressDot';
import clsx from 'clsx';

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
      className={clsx('flex relative', {
        'flex-1': !isLastStep,
        'flex-row': labelPlacement === 'horizontal',
        'flex-col': labelPlacement === 'vertical',
      })}
    >
      <div
        className={clsx('flex', {
          'flex-row': labelPlacement === 'horizontal',
          'flex-col': labelPlacement === 'vertical',
        })}
      >
        <ProgressDot
          status={status}
          direction={direction}
          isLastStep={isLastStep}
        />
        <div
          className={clsx('flex bg-white z-10 flex-col', {
            'justify-center': direction === 'horizontal',
            'justify-start': direction === 'vertical',
            'pl-2.5 pr-2': labelPlacement === 'horizontal',
            'pt-2': labelPlacement === 'vertical',
          })}
        >
          <p
            className={`${
              status === StepStatus.current
                ? 'text-primary'
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
