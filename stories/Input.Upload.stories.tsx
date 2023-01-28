import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, UploadProps } from "../src";

const meta: Meta = {
    title: 'Data Entry/File Upload',
    component: Input.Upload
}

export default meta;

const Template: Story<UploadProps> = (args) => <Input.Upload {...args} />;

export const Default = Template.bind({});
Default.args = {}