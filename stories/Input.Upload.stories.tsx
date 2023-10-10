import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, CloseLine } from '../src';
import { UploadProps } from '../src/Input/Upload';
import colors from '../src/Colors';

const meta: Meta = {
  title: 'Data Entry/File Upload',
  component: Input.Upload,
};

export default meta;

const Template: Story<UploadProps> = (args) => <Input.Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'input',
  multiple: false,
  buttonContent: (
    <div className="h-[90px] w-[80px] rounded-[5px] bg-orange-200 mr-2.5 relative">
      <button className="absolute bottom-[5px] right-[5px] p-1 rounded opacity-10 bg-gray-800">
        <CloseLine size={14} color={colors.white} />
      </button>
    </div>
  ),
  showFileSelect: false,
  onChange: (file) => console.log('file: ', file),
};
