import { StoryObj, Meta } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'd1-bold',
        'd1-medium',
        'd1-light',
        'd2-bold',
        'd2-medium',
        'd2-light',
        'd3-bold',
        'd3-medium',
        'd3-light',
        'h1-bold',
        'h1-medium',
        'h1-light',
        'h2-bold',
        'h2-medium',
        'h2-light',
        'h3-bold',
        'h3-medium',
        'h3-light',
        'h4-bold',
        'h4-medium',
        'h4-light',
        'h5-bold',
        'h5-medium',
        'h5-light',
        'h6-bold',
        'h6-medium',
        'h6-light',
        'b1-bold',
        'b1-medium',
        'b1-regular',
        'b1-light',
        'b2-bold',
        'b2-medium',
        'b2-regular',
        'b2-light',
        'b3-bold',
        'b3-medium',
        'b3-regular',
        'b3-light',
        'b4-bold',
        'b4-medium',
        'b4-regular',
        'b4-light',
        'c1-medium',
        'c1-regular',
        'c2-medium',
        'c2-regular',
        'l1-medium',
        'l1-regular',
        'l2-medium',
        'l2-regular',
        'bt1-bold',
        'bt1-1-bold',
        'bt2-bold'
      ]
    },
    children: {
      control: 'text'
    }
  }
};

type IStory = StoryObj<typeof Typography>;

export const Text: IStory = {
  args: {
    variant: 'b1-bold',
    children: 'This is the typography component'
  }
};

export default meta;
