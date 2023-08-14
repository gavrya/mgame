import { GameStart } from './GameStart';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Templates/GameStart',
  component: GameStart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameStart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
