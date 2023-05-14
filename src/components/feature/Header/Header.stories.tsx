import { Header } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Header> = {
  title: 'Feature/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};