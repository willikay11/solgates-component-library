import { useState } from 'react';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';

export interface ToggleSwitchProps {
  label: string;
  onChange: (value: Boolean) => void;
}

export const ToggleSwitch = ({ label, onChange }: ToggleSwitchProps) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <Switch
      checked={enabled}
      onChange={(value) => {
        setEnabled(value);
        onChange(value);
      }}
      className={clsx(
        'relative inline-flex items-center flex-shrink-0 h-7 w-14 px-2 border-1 border-transparent rounded-[30px] cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        {
          'bg-primary': enabled,
          'bg-primary/10': !enabled,
        }
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={clsx(
          ' h-4 w-4 pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200',
          {
            'translate-x-6': enabled,
            'translate-x-0': !enabled,
          }
        )}
      />
    </Switch>
  );
};
