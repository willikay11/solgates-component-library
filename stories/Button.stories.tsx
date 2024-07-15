import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps, ButtonTypes, notification } from '../src';
import { AddLine } from '../src';

const buttonLayout = (args: ButtonProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <p className="mb-2 italic">-</p>
        <Button {...args}>Primary</Button>
      </div>

      <div className="col-span-2">
        <p className="mb-2 italic">loading</p>
        <Button {...args} loading={true}>
          Primary
        </Button>
      </div>

      <div className="col-span-2">
        <p className="mb-2 italic">ghost</p>
        <Button {...args} ghost>
          Primary
        </Button>
      </div>

      <div className="col-span-2">
        <p className="mb-2 italic">disabled</p>
        <Button {...args} disabled>
          Primary
        </Button>
      </div>

      <div className="col-span-2">
        <p className="mb-2 italic">Icon</p>
        <Button {...args} prefixIcon={<AddLine size={16} />}>
          Primary
        </Button>
      </div>

      <div className="col-span-2">
        <p className="mb-2 italic">block</p>
        <Button {...args} block>
          Primary
        </Button>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'General/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => buttonLayout(args),
  args: {
    children: 'Default',
    type: ButtonTypes.default,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Default Button',
        message: 'Button clicked',
      });
    },
  },
};
export const Primary: Story = {
  render: (args) => buttonLayout(args),
  args: {
    children: 'Primary',
    type: ButtonTypes.primary,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Primary Button',
        message: 'Button clicked',
      });
    },
  },
};

export const Danger: Story = {
  render: (args) => buttonLayout(args),
  args: {
    children: 'Danger',
    type: ButtonTypes.danger,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Danger Button',
        message: 'Button clicked',
      });
    },
  },
};

export const Text: Story = {
  render: (args) => buttonLayout(args),
  args: {
    children: 'Text',
    type: ButtonTypes.text,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Text Button',
        message: 'Button clicked',
      });
    },
  },
};

export const Link: Story = {
  render: (args) => buttonLayout(args),

  args: {
    children: 'Link',
    type: ButtonTypes.link,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Link Button',
        message: 'Button clicked',
      });
    },
  },
};

// export const PrefixIcon = Template.bind({});
// PrefixIcon.args = {
//   type: ButtonTypes.default,
//   block: false,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
//   prefixIcon: (
//     <IconContainer>
//       <User6Line color="#DB4437" />
//     </IconContainer>
//   ),
// };
//
// export const Block = Template.bind({});
// Block.args = {
//   type: ButtonTypes.primary,
//   block: true,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
// };
//
// export const Link = Template.bind({});
// Link.args = {
//   type: ButtonTypes.link,
//   block: false,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
//   prefixIcon: <User6Line color="#DB4437" />,
// };
//
// export const Primary_Blue = Template.bind({});
// Primary_Blue.args = {
//   type: ButtonTypes.primary_blue_600,
//   block: false,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
// };
//
// export const Gray_800 = Template.bind({});
// Gray_800.args = {
//   type: ButtonTypes.primary_gray_800,
//   block: false,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
// };
//
// export const Orange_200 = Template.bind({});
// Orange_200.args = {
//   type: ButtonTypes.primary_orange_200,
//   block: false,
//   loading: false,
//   onClick: () => console.log('Button Clicked'),
// };
