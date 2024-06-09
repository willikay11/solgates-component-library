import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowUpSLine, Checkbox, Collapsible } from '../src';
import {
  ArrowDownSLine,
  Button,
  ButtonTypes,
} from '@willikay11/solgates-component-library';

const meta: Meta = {
  title: 'Data Display/Collapse',
  component: Collapsible,
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    openIcon: <ArrowDownSLine size={14} />,
    closeIcon: <ArrowUpSLine size={14} />,
    panelTitle: 'Condition',
    panelContent: (
      <div className="grid grid-cols-1">
        <>
          <Checkbox name="New" id="new" label={<label>New</label>} />
          <Checkbox
            name="Pre-owned"
            id="pre"
            label={<label>Pre Owned</label>}
          />
        </>
      </div>
    ),
  },
};

export const ExtraContent: Story = {
  args: {
    openIcon: <ArrowDownSLine size={14} />,
    closeIcon: <ArrowUpSLine size={14} />,
    extraContent: <Button type={ButtonTypes.link}>Delete</Button>,
    panelTitle: 'Lorem Ipsum',
    panelContent: (
      <div className="grid grid-cols-1">
        <p className="text-xs text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    ),
  },
};

export const Open: Story = {
  args: {
    open: true,
    openIcon: <ArrowDownSLine size={14} />,
    closeIcon: <ArrowUpSLine size={14} />,
    panelTitle: 'Lorem Ipsum',
    panelContent: (
      <div className="grid grid-cols-1">
        <p className="text-xs text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    ),
  },
};

export const Borderless: Story = {
  args: {
    openIcon: <ArrowDownSLine size={14} />,
    closeIcon: <ArrowUpSLine size={14} />,
    panelTitle: 'Lorem Ipsum',
    bordered: false,
    showTitleDivider: false,
    panelContent: (
      <div className="grid grid-cols-1">
        <p className="text-xs text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    ),
  },
};

export const TitleDivider: Story = {
  args: {
    openIcon: <ArrowDownSLine size={14} />,
    closeIcon: <ArrowUpSLine size={14} />,
    panelTitle: 'Lorem Ipsum',
    bordered: false,
    showTitleDivider: false,
    panelContent: (
      <div className="grid grid-cols-1">
        <p className="text-xs text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    ),
  },
};
