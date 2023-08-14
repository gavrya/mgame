import { GameSteps } from './GameSteps';
import { mockedGameSteps } from './gameSteps.mock';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/GameSteps',
  component: GameSteps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameSteps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    gameSteps: mockedGameSteps,
  },
};
