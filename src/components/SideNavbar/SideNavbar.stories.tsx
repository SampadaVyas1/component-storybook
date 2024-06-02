import { Meta, StoryObj } from '@storybook/react';
import { SideNavbar } from './SideNavbar';
import CourseIcon from '../../icons/CourseIcon';
import { Typography } from '../Typography/Typography';
import HomeIcon from '../../icons/HomeIcon';
import style from './SideNavbar.stories.module.scss';

const meta: Meta<typeof SideNavbar> = {
  title: 'Components/SideNavbar',
  component: SideNavbar,
  args: {}
};

export default meta;

type Story = StoryObj<typeof SideNavbar>;

export const Default: Story = {
  args: {
    header: <CourseIcon />,
    sideNavbarItems: [
      {
        id: '1',
        item: (
          <div>
            <Typography>Dashboard</Typography>
          </div>
        )
      },
      {
        id: '2',
        item: (
          <div className={style.customItem}>
            <HomeIcon />
            <Typography>Home</Typography>
          </div>
        )
      },
      {
        id: '3',
        item: <Typography className={style.customItem}>Project</Typography>,
        disabled: true
      },
      { id: '4', item: <Typography className={style.customItem}>Task</Typography> },
      { id: '5', item: <Typography className={style.customItem}>Reporting</Typography> },
      { id: '6', item: <Typography className={style.customItem}>Users</Typography> }
    ],
    lowerPanelItems: [
      { id: '7', item: <Typography className={style.customItem}>Support</Typography> },
      { id: '8', item: <Typography className={style.customItem}>Setting</Typography> }
    ],
    footerContent: <p>Any Dynamic Footer content</p>,
    selectedId: '2',
    onItemClick: (item: string) => item
  }
};
