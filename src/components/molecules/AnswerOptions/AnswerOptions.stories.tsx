import { AnswerOptions } from './AnswerOptions';
import { mockedAnswerOptions } from './answerOptions.mock';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/AnswerOptions',
  component: AnswerOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnswerOptions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    answerOptions: mockedAnswerOptions,
  },
};
