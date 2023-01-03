import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Button, ButtonTypes, Card, Checkbox, IconContainer, Input, Tabs, TabsProps} from "../src";
import { RiEyeCloseLine, RiEyeLine, RiUser6Line, RiCheckFill, RiArrowDownSLine, RiGenderlessLine, RiMailOpenLine, RiLockLine, RiFacebookLine, RiGoogleLine } from "react-icons/ri";
import colors from "tailwindcss/colors";

const meta: Meta = {
    title: 'Data Display/Tabs',
    component: Tabs
}

const signIn = (
    <div className="w-full">
        <div className="grid grid-cols-1 mb-2.5">
            <Input.Text placeholder="Email" prefixIcon={<IconContainer><RiMailOpenLine color={colors.yellow["600"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-[15px]">
            <Input.Password placeholder="Password" prefixIcon={<IconContainer><RiLockLine color={colors.blue["600"]} /></IconContainer>} iconRender={(visible) => visible ? <RiEyeLine /> : <RiEyeCloseLine />} />
        </div>

        <div className="grid grid-cols-1">
            <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Sign Up</Button>
        </div>
    </div>
);

const signUp = (
    <div className="w-full">
        <div className="grid gap-2 grid-cols-2 mb-2.5">
            <Input.Text placeholder="First Name" prefixIcon={<IconContainer><RiUser6Line color={colors.green["500"]} /></IconContainer>} />
            <Input.Text placeholder="Last Name" prefixIcon={<IconContainer><RiUser6Line color={colors.green["500"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-2.5">
            <Input.Select
                items={[
                    { label: 'Male', value: 'M'},
                    { label: 'Female', value: 'F'},
                ]}
              prefixIcon={<IconContainer><RiGenderlessLine color={colors.red["600"]} /></IconContainer>}
              arrowIcon={<RiArrowDownSLine size={18} />}
              selectedIcon={<RiCheckFill size={18} />}
            />
        </div>

        <div className="grid grid-cols-1 mb-2.5">
            <Input.Text placeholder="Email" prefixIcon={<IconContainer><RiMailOpenLine color={colors.yellow["600"]} /></IconContainer>} />
        </div>

        <div className="grid grid-cols-1 mb-[15px]">
            <Input.Password placeholder="Password" prefixIcon={<IconContainer><RiLockLine color={colors.blue["600"]} /></IconContainer>} iconRender={(visible) => visible ? <RiEyeLine /> : <RiEyeCloseLine />} />
        </div>

        <div className="grid grid-cols-1 mb-[15px]">
            <Checkbox name="a" id="a" label={<span className="text-xs leading-4 text-gray-500 font-normal">By signing up, you agree to the Terms of Service and Privacy Policy</span>}/>
        </div>
        <div className="grid grid-cols-1 mb-[15px]">
            <Button onClick={() => console.log('clicked')} type={ButtonTypes.primary} block>Sign Up</Button>
        </div>
        <div className="grid gap-2 grid-cols-2">
            <Button onClick={() => console.log('clicked')} prefixIcon={<IconContainer><RiGoogleLine color="#DB4437" /></IconContainer>} block>Google</Button>
            <Button onClick={() => console.log('clicked')} prefixIcon={<IconContainer><RiFacebookLine color="#3B5998" /></IconContainer>} block>Facebook</Button>
        </div>
    </div>
);

export default meta;

const Template: Story<TabsProps> = (args) => <div className="w-96"><Card><Tabs {...args} /></Card></div>;

export const Default = Template.bind({});
Default.args = {
    defaultActiveKey: 2,
    items: [
        { label: 'Sign In', content: signIn},
        { label: 'Sign Up', content: signUp},
    ],
    onChange: (activeKey: number) => console.log('Active key: ', activeKey),
};