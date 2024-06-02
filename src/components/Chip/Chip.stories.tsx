import { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import CrossIcon from '../../icons/CrossIcon';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['Rounded', 'Circular']
    },
    children: {
      control: 'text'
    },
    active: {
      control: 'boolean'
    },
    isRemovable: {
      control: 'boolean'
    },
    subVariant: {
      control: 'select',
      options: ['Outlined', 'Filled']
    },
    disabled: {
      control: 'boolean'
    },
    onRemoveIconClick: {
      action: 'onRemoveIconClick'
    }
  }
};

type Story = StoryObj<typeof Chip>;

export const RoundedChip: Story = {
  args: {
    variant: 'Rounded',
    children: 'Label',
    isRemovable: false,
    subVariant: 'Filled',
    disabled: false,
    RemoveIcon: CrossIcon,
    active: false
  }
};

export const CircularChip: Story = {
  args: {
    variant: 'Circular',
    children: 'Label',
    isRemovable: false,
    subVariant: 'Filled',
    disabled: false,
    active: false
  }
};

export default meta;
