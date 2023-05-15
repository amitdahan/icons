import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
  name: 'Icon Component',
  args: {
    size: 14,
    name: 'plus',
    color: '#000000',
  },
  parameters: {
    layout: 'centered',
  },
};
