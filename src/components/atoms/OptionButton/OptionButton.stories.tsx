import { OptionButton } from './OptionButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/OptionButton',
  component: OptionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OptionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    status: 'inactive',
    option: 'A',
    question: 'What is your name?',
  },
};

export const Selected: Story = {
  args: {
    status: 'selected',
    option: 'A',
    question: 'What is your name?',
  },
};

export const Correct: Story = {
  args: {
    status: 'correct',
    option: 'A',
    question: 'What is your name?',
  },
};

export const Wrong: Story = {
  args: {
    status: 'wrong',
    option: 'A',
    question: 'What is your name?',
  },
};
