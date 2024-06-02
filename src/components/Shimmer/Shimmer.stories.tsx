import { Meta, StoryObj } from '@storybook/react';
import Shimmer from './Shimmer';

const meta: Meta<typeof Shimmer> = {
  title: 'Components/Shimmer',
  component: Shimmer,
};

export default meta;

type Story = StoryObj<typeof Shimmer>;

export const RectangularShimmer: Story = {
  args: {
    width: '200px',
    height: '80px',
    variant: 'Rectangular',
  },
};

export const CircularShimmer: Story = {
  args: {
    width: '50px',
    height: '50px',
    variant: 'Circular',
  },
};

export const RoundedShimmer: Story = {
  args: {
    width: '200px',
    height: '80px',
    variant: 'Rounded',
  },
};

export const ShimmerBasedOnChildComponent: Story = {
  args: {
    children: <div style={{ width: '200px', height: '200px' }}></div>,
  },
};
