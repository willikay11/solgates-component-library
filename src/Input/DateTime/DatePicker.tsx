import { SingleDatePicker } from './SingleDatePicker';
import { RangePicker } from './RangePicker';
import { TextInputProps } from '../text';
import { FC } from 'react';

interface Props {
  picker: 'single' | 'range';
  disabledDate?: Date;
  textProps: Omit<TextInputProps, 'onChange'>;
}
export const DatePicker: FC<Props> = ({ picker, ...props }) => {
  if (picker === 'single') return <SingleDatePicker {...props}   />;
  return <RangePicker {...props} />;
};
