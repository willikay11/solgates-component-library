import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonTypes,
  Card,
  Checkbox,
  IconContainer,
  Input,
  Tabs,
  TabsProps,
  User6Line,
} from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Tabs',
  component: Tabs,
};

const signIn = (
  <div className="w-full">
    <div className="grid grid-cols-1 mb-2.5">
      <Input.Text
        placeholder="Email"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.yellow['600']} />
          </IconContainer>
        }
      />
    </div>

    <div className="grid grid-cols-1 mb-[15px]">
      <Input.Password
        placeholder="Password"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.blue['600']} />
          </IconContainer>
        }
        iconRender={(visible) =>
          visible ? (
            <User6Line color={colors.gray['500']} />
          ) : (
            <User6Line color={colors.gray['500']} />
          )
        }
      />
    </div>

    <div className="grid grid-cols-1">
      <Button
        onClick={() => console.log('clicked')}
        type={ButtonTypes.primary}
        block
      >
        Sign Up
      </Button>
    </div>
  </div>
);

const signUp = (
  <div className="w-full">
    <div className="grid gap-2 grid-cols-2 mb-2.5">
      <Input.Text
        placeholder="First Name"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.green['500']} />
          </IconContainer>
        }
      />
      <Input.Text
        placeholder="Last Name"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.green['500']} />
          </IconContainer>
        }
      />
    </div>

    <div className="grid grid-cols-1 mb-2.5">
      <Input.Select
        items={[
          { label: 'Male', value: 'M' },
          { label: 'Female', value: 'F' },
        ]}
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.red['600']} />
          </IconContainer>
        }
        arrowIcon={<User6Line color={colors.gray['600']} size={18} />}
        selectedIcon={<User6Line color={colors.gray['600']} size={18} />}
      />
    </div>

    <div className="grid grid-cols-1 mb-2.5">
      <Input.Text
        placeholder="Email"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.yellow['600']} />
          </IconContainer>
        }
      />
    </div>

    <div className="grid grid-cols-1 mb-[15px]">
      <Input.Password
        placeholder="Password"
        prefixIcon={
          <IconContainer>
            <User6Line color={colors.blue['600']} />
          </IconContainer>
        }
        iconRender={(visible) =>
          visible ? (
            <User6Line color={colors.gray['500']} />
          ) : (
            <User6Line color={colors.gray['500']} />
          )
        }
      />
    </div>

    <div className="grid grid-cols-1 mb-[15px]">
      <Checkbox
        name="a"
        id="a"
        value="yes"
        label={
          <span className="text-xs leading-4 text-gray-500 font-normal">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </span>
        }
      />
    </div>
    <div className="grid grid-cols-1 mb-[15px]">
      <Button
        onClick={() => console.log('clicked')}
        type={ButtonTypes.primary}
        block
      >
        Sign Up
      </Button>
    </div>
    <div className="grid gap-2 grid-cols-2">
      <Button
        onClick={() => console.log('clicked')}
        prefixIcon={
          <IconContainer>
            <User6Line color="#DB4437" />
          </IconContainer>
        }
        block
      >
        Google
      </Button>
      <Button
        onClick={() => console.log('clicked')}
        prefixIcon={
          <IconContainer>
            <User6Line color="#3B5998" />
          </IconContainer>
        }
        block
      >
        Facebook
      </Button>
    </div>
  </div>
);

export default meta;

const Template: Story<TabsProps> = (args) => (
  <div className="w-96">
    <Card>
      <Tabs {...args} />
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultActiveKey: 2,
    tabWidth: 'contain',
  items: [
    { label: 'Sign In', content: signIn },
    { label: 'Sign Up', content: signUp },
  ],
  onChange: (activeKey: number) => console.log('Active key: ', activeKey),
};
