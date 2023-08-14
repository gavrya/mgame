import { Step } from './Step';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Step',
  component: Step,
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
} satisfies Meta<typeof Step>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    children: '$1,000,000',
    status: 'inactive',
  },
};

export const Current: Story = {
  args: {
    children: '$1,000,000',
    status: 'current',
  },
};

export const Finished: Story = {
  args: {
    children: '$1,000,000',
    status: 'finished',
  },
};
