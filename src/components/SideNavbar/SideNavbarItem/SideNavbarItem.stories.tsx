import { Meta, StoryObj } from '@storybook/react';
import SideNavbarItem from './SideNavbarItem';
import HomeIcon from '../../../icons/HomeIcon';
import { Typography } from '../../Typography/Typography';

const meta: Meta<typeof SideNavbarItem> = {
  title: 'Components/SideNavbarItem',
  component: SideNavbarItem,
  args: {}
};

export default meta;

type Story = StoryObj<typeof SideNavbarItem>;

export const WithIcon: Story = {
  args: {
    id: '2',
    item: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon />
        <Typography>Home</Typography>
      </div>
    )
  }
};

export const WithoutIcon: Story = {
  args: {
    id: '6',
    item: 'Users'
  }
};
