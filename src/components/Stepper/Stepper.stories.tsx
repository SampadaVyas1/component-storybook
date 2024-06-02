import { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import { IStep } from './Step/IStep';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const steps: IStep[] = [
  {
    id: '1',
    stepNumber: '1',
    label: 'First step',
    status: 'COMPLETED',
  },
  {
    id: '2',
    stepNumber: '2',
    label: 'Second step',
    status: 'IN_PROGRESS',
  },
  {
    id: '3',
    stepNumber: '3',
    label: 'Third step',
    status: 'TODO',
  },
];

export const Default: Story = {
  args: {
    stepDetails: steps,
    activeStep: '3',
  },
};
