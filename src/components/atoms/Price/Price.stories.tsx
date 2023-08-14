import { Price } from './Price';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'number',
      description: 'Format price',
    },
  },
} satisfies Meta<typeof Price>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Million: Story = {
  args: {
    children: 1000000,
  },
};

export const Zero: Story = {
  args: {
    children: 0,
  },
};

export const Custom: Story = {
  args: {
    children: 235305,
  },
};
