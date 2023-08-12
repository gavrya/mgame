import { PrimaryButton } from './PrimaryButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UIkit/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'String or React component',
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Press me!',
  },
};
