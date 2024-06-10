import { SingleDatePicker } from './SingleDatePicker';
import { RangePicker } from './RangePicker';
import { TextInputProps } from '../text';
import { FC } from 'react';
import { DatePreset } from './components/presets';

interface Props {
  picker: 'single' | 'range';
  disabledDate?: Date;
  presets?: DatePreset[];
  textProps: Omit<TextInputProps, 'onChange'>;
}
export const DatePicker: FC<Props> = ({ picker, ...props }) => {
  if (picker === 'single') return <SingleDatePicker {...props} />;
  return <RangePicker {...props} />;
};
