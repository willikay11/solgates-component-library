import React, { useEffect, useState } from 'react';

export interface RangeProps {
  name: string;
  min: number;
  max: number;
  step: number;
}

export const Range = ({ name, min = 0, max = 100, step = 1 }: RangeProps) => {
  const ref = React.useRef<any>(null);
  const [range, setRange] = useState<any>(min);
  const [moveStep, setMoveStep] = useState(0);
  const onChange = (event: any) => {
    setRange(event.target.value);
  };

  useEffect(() => {
    const rangeLinePadding = 14.8;
    const calcStep =
      (ref?.current?.offsetWidth - rangeLinePadding) / ref?.current?.max;
    setMoveStep(calcStep);
  }, []);

  return (
    <div className="relative">
      <input
        ref={ref}
        name={name}
        defaultValue={min}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        type="range"
        className="transparent h-[4px] w-full cursor-pointer accent-orange-600 appearance-none bg-transparent border-transparent dark:bg-gray-200 [&::-webkit-slider-runnable-track]:rounded"
      />

      <label
        style={{ transform: `translateX(${parseInt(range) * moveStep}px)` }}
        className={`w-[35px] h-[40px] absolute top-[20px] -left-[26px] pointer-events-none`}
      >
        <span className="absolute top-[8px] left-1/2 text-center z-10 translate-x-[-50%]">
          {range}
        </span>
      </label>
    </div>
  );
};
