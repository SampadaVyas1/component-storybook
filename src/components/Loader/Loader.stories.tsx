import { StoryObj, Meta } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    variant: {
      control: 'select',
      options: ['Linear', 'Circular', 'Dotted']
    },
    size: {
      control: 'select',
      options: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large']
    },
    show: {
      control: 'boolean'
    }
  }
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    variant: 'Linear',
    show: true,
    size: 'Small'
  }
};
