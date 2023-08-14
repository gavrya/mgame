import { MenuToggle } from './MenuToggle';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/MenuToggle',
  component: MenuToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpened: {
      control: 'boolean',
      description: 'Tells if menu is opened',
    },
  },
} satisfies Meta<typeof MenuToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  args: {
    isOpened: true,
  },
};

export const Closed: Story = {
  args: {
    isOpened: false,
  },
};
