import { GameResults } from './GameResults';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/GameResults',
  component: GameResults,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameResults>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Greetings: Story = {
  args: {
    price: 8000,
  },
};
