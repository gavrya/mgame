import { GamePlay } from './GamePlay';
import { mockedGamePlay } from './gamePlay.mock';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Templates/GamePlay',
  component: GamePlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GamePlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: mockedGamePlay,
};
