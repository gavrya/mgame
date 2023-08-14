import { mockedAnswerOptions } from '../../molecules/AnswerOptions/answerOptions.mock';
import { GameQuiz } from './GameQuiz';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/GameQuiz',
  component: GameQuiz,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameQuiz>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    question:
      'How old your elder brother was 10 years before you was born, mate?',
    answerOptions: mockedAnswerOptions,
  },
};
