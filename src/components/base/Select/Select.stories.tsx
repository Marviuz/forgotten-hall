import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';
import CHARACTERS from '@/constants/characters';

const meta: Meta<typeof Select> = {
  title: 'Base/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: CHARACTERS.map((char) => ({
      image: char.img,
      label: char.name,
      value: char.name,
    })),
    value: {
      image: '/images/characters/March7th.png',
      label: 'March 7th',
      value: 'March7th',
    },
  },
};