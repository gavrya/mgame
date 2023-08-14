import { GameGreetings } from './GameGreetings';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/GameGreetings',
  component: GameGreetings,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameGreetings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Greetings: Story = {
  args: {},
};
