import { GameInfo } from './GameInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GameInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithBackground: Story = {
  args: {
    withBackground: true,
    buttonName: 'Start',
    children: '{PLACEHOLDER}',
  },
};

export const WithoutBackground: Story = {
  args: {
    withBackground: false,
    buttonName: 'Try again',
    children: '{PLACEHOLDER}',
  },
};
