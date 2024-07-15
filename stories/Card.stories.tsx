import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonTypes,
  Card,
  CARD_TYPE,
  IconContainer,
  Input,
  User6Line,
} from '../src';
import colors from 'tailwindcss/colors';

const meta: Meta = {
  title: 'Data Display/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="w-full">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2">
          <Input.Text
            placeholder="First Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
          <Input.Text
            placeholder="Last Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Region"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Apartment/Office"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.cyan['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Phone"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Button
            onClick={() => console.log('clicked')}
            type={ButtonTypes.primary}
            block
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </Card>
  ),
  args: {
    title: 'Card Title',
  },
};

export const ExtraContent: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="w-full">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2">
          <Input.Text
            placeholder="First Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
          <Input.Text
            placeholder="Last Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Region"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Apartment/Office"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.cyan['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Phone"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Button
            onClick={() => console.log('clicked')}
            type={ButtonTypes.primary}
            block
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </Card>
  ),
  args: {
    title: 'Card Title',
    extraContent: <Button type={ButtonTypes.link}>Cancel</Button>,
  },
};

export const typeShadow: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="w-full">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-2">
          <Input.Text
            placeholder="First Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
          <Input.Text
            placeholder="Last Name"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.green['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Region"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Apartment/Office"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.cyan['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Input.Text
            placeholder="Phone"
            prefixIcon={
              <IconContainer>
                <User6Line size={14} color={colors.blue['500']} />
              </IconContainer>
            }
          />
        </div>

        <div className="grid grid-cols-1 mb-2">
          <Button
            onClick={() => console.log('clicked')}
            type={ButtonTypes.primary}
            block
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </Card>
  ),
  args: {
    title: 'Card Title',
    type: CARD_TYPE.shadow,
  },
};
