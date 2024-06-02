import { Meta, StoryFn } from '@storybook/react';
import Menu from './Menu';
import { SVG_COLOR_GREY } from '../../utils/svg/constant';
import SearchIcon from '../../icons/SearchIcon';
import KebabIcon from '../../icons/KebabIcon';
import menuItemStyles from './MenuItem/MenuItem.module.scss';
import styles from './Menu.module.scss';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    onMenuItemClick: { action: 'onMenuItemClick' }
  }
} as Meta<typeof Menu>;

export const DefaultMenu: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
DefaultMenu.args = {
  TriggerElement: <KebabIcon />,
  triggerElementClassName: styles.customTriggerElement,
  menuPosition: 'BottomLeft',
  menuItems: [
    {
      content: 'Item 1',
      id: '1'
    },
    {
      content: 'Item 2',
      id: '2'
    },
    {
      content: 'Item 3',
      id: '3'
    }
  ],
  menuItemClassName: menuItemStyles.menuItemClassName
};

export const MenuWithIcons: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
MenuWithIcons.args = {
  TriggerElement: <KebabIcon />,
  triggerElementClassName: styles.customTriggerElement,
  menuPosition: 'BottomLeft',
  menuItems: [
    {
      id: '1',
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
      )
    },
    {
      id: '2',
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
          <span>Item2</span>
          <SearchIcon color={SVG_COLOR_GREY} />
        </div>
      )
    },
    {
      id: '3',
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
          <span>Item3</span>
          <SearchIcon color={SVG_COLOR_GREY} />
        </div>
      )
    }
  ]
};
