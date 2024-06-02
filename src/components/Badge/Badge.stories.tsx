import { StoryObj, Meta } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {}
};

type Story = StoryObj<typeof Badge>;

export const BadgeWithContent: Story = {
  args: {
    badgeContent: 'New',
    color: 'red',
    typographyProps: {
      variant: 'b4-medium',
      style: {
        color: 'white'
      }
    }
  }
};

export const BadgeWithoutContent: Story = {
  args: {
    color: 'green',
    style: {
      height: '12px',
      width: '12px'
    }
  }
};

export default meta;
