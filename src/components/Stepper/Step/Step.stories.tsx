import { Meta, StoryObj } from '@storybook/react';
import Step from './Step';

const meta: Meta<typeof Step> = {
  title: 'Components/Step',
  component: Step,
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
    id: '1',
    stepNumber: '1',
    label: 'First step',
    status: 'TODO',
  },
};
