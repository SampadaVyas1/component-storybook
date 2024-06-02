import { StoryObj, Meta } from '@storybook/react';
import PageLoader from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'Components/PageLoader',
  component: PageLoader,
  argTypes: {
    textPosition: {
      control: 'select',
      options: ['Top', 'Right', 'Bottom', 'Left']
    }
  }
};
export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {
  args: {
    loaderProps: {
      variant: 'Circular',
      show: true
    }
  }
};

export const PageLoaderWithText: Story = {
  args: {
    loaderProps: {
      variant: 'Circular',
      show: true
    },
    text: 'Loading...',
    textPosition: 'Bottom'
  }
};

export const CustomBackdropStyle: Story = {
  args: {
    loaderProps: {
      variant: 'Circular',
      show: true
    },
    backdropStyles: {
      backgroundColor: 'rgba(9, 23, 43, 0.3)'
    },
    text: 'Loading...',
    typographyProps: {
      variant: 'b1-bold'
    }
  }
};
