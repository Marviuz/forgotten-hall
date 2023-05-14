import { TextField } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof TextField> = {
  title: 'Base/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};
