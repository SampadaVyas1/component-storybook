import { Meta, StoryFn } from '@storybook/react';
import MenuItem from './MenuItem';
import { SVG_COLOR_GREY } from '../../../utils/svg/constant';
import SearchIcon from '../../../icons/SearchIcon';

export default {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
  argTypes: {
    onClick: { action: 'onClick' }
  }
} as Meta<typeof MenuItem>;

export const DefaultMenuItem: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;
DefaultMenuItem.args = {
  content: 'Item 1',
  id: '1',
  disabled: false
};

export const MenuItemWithIcon: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;
MenuItemWithIcon.args = {
  content: (
    <div
      style={{
        display: 'flex',
        columnGap: '15px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SearchIcon color={SVG_COLOR_GREY} />
      <span>Item1</span>
      <SearchIcon color={SVG_COLOR_GREY} />
    </div>
  ),
  id: '1',
  disabled: false
};
