import { SingleDatePicker } from './SingleDatePicker';
import { RangePicker } from './RangePicker';
import { TextInputProps } from '../text';
import { FC } from 'react';

interface Props {
  picker: 'single' | 'range';
  textProps: Omit<TextInputProps, 'onChange'>;
}
export const DatePicker: FC<Props> = ({ picker, textProps }) => {
  if (picker === 'single') return <SingleDatePicker textProps={textProps} />;
  return <RangePicker textProps={textProps} />;
};
