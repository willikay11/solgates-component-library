import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, ButtonTypes, IconContainer, Modal, ModalProps} from "../src";
import {RiErrorWarningLine} from "react-icons/ri";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Feedback/Modal',
    component: Modal
}

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// const [open, setOpen] = useState<boolean>(false);
export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: () => console.log(false),
    children: <div className="flex flex-col justify-center items-center">
        <IconContainer bgColor="bg-red-50">
            <RiErrorWarningLine color={colors.red["500"]} />
        </IconContainer>

        <p className="text-xs leading-5 font-bold text-gray-800 mt-2.5">Kindly note</p>

        <p className="text-xs leading-4 font-normal text-gray-600 mt-2.5">In order to place the bid, you will need to pay KES. 3,400.00 which is 20% of the total selling price of the item.</p>

        <div className="w-full grid gap-4 grid-cols-2 mt-2.5 ">
            <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block ghost>Cancel</Button>
            <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Submit</Button>
        </div>
    </div>
};