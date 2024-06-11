import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Modal, MODAL_POSITION} from '../src';
import {DefaultModal} from "./Modals";

const meta: Meta = {
  title: 'Feedback/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: (args) => (<DefaultModal args={args} />),
}

export const Top: Story = {
    render: (args) => <DefaultModal args={args} />,
    args: {
        position: MODAL_POSITION.TOP
    }
}

export const Bottom: Story = {
    render: (args) => <DefaultModal args={args} />,
    args: {
        position: MODAL_POSITION.BOTTOM
    }
}

export const EndToEndFullWidth: Story = {
    render: (args) => <DefaultModal args={args} />,
    args: {
        position: MODAL_POSITION.BOTTOM,
        widthClass: 'w-full',
        fullWidth: true,
    }
}

export const WithoutRoundedBorders: Story = {
    render: (args) => <DefaultModal args={args} />,
    args: {
        position: MODAL_POSITION.BOTTOM,
        widthClass: 'w-full',
        fullWidth: true,
        roundedBorder: 'rounded-[0px]'
    }
}


