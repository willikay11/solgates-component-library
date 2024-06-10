import { FC } from 'react';

export interface DatePreset {
  label: string;
  key: number;
  dates: Date[];
}
export interface DatePresets {
  presets: DatePreset[];
  onClick: (dates: Date[]) => void;
}
export const Presets: FC<DatePresets> = ({ presets, onClick }) => {
  return (
    <div className="flex flex-col h-screen border-[1px] border-transparent border-r-gray-100 pl-2 pr-2">
      {presets.map((preset) => (
        <button
          className="text-gray-800 text-xs mb-1 hover:bg-primary/10 px-2 py-1 rounded"
          key={preset.key}
          onClick={() => onClick(preset.dates)}
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
};
