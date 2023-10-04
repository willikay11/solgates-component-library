import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Checkbox,
  Collapsible,
  CollapsibleProps,
  User6Line,
  Button,
  ButtonTypes,
} from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Collapse',
  component: Collapsible,
};

export default meta;

const Template: Story<CollapsibleProps> = args => <Collapsible {...args} />;

export const Default = Template.bind({});
Default.args = {
  openIcon: <User6Line size={14} color={colors.red['500']} />,
  closeIcon: <User6Line size={14} color={colors.red['500']} />,
  panelTitle: 'Condition',
  extraContent: <Button type={ButtonTypes.link}>Apply</Button>,
  panelContent: (
    <div className="grid grid-cols-1">
      <>
        <Checkbox name="New" id="new" label={<label>New</label>} />
        <Checkbox name="Pre-owned" id="pre" label={<label>Pre Owned</label>} />
      </>
    </div>
  ),
};
