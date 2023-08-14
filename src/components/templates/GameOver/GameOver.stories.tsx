import { GameOver } from './GameOver';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Templates/GameOver',
  component: GameOver,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameOver>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    price: 342534,
  },
};
