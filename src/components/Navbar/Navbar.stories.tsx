import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import AccountIcon from '../../icons/AccountIcon';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
    logoIcon: <AccountIcon></AccountIcon>,
    navbarLinks: (
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li>Menu Item Text</li>
        <li>Menu Item Text</li>
        <li>Menu Item Text</li>
        <li>Menu Item Text</li>
      </ul>
    )
  }
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {}
};
