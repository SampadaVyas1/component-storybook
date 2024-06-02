import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import SideDrawer from './SideDrawer';

const meta: Meta<typeof SideDrawer> = {
  title: 'Components/SideDrawer',
  component: SideDrawer,
  args: {
    onRequestClose: action('onRequestClose')
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right']
    }
  }
};

export default meta;

type Story = StoryObj<typeof SideDrawer>;

export const Default: Story = {
  args: {
    children: 'Default',
    open: true
  }
};

export const BackdropStyles: Story = {
  args: {
    children: 'Backdrop Styles',
    open: true,
    backdropStyles: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  }
};

export const LeftSideDrawer: Story = {
  args: {
    children: 'Left Side Drawer',
    open: true,
    position: 'Left'
  }
};

export const RightSideDrawer: Story = {
  args: {
    children: 'Right Side Drawer',
    open: true,
    position: 'Right'
  }
};
