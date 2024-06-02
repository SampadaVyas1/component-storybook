import { StoryObj, Meta } from '@storybook/react';
import style from './Tabs.module.scss';
import Tabs from './Tabs';
import React, { useState } from 'react';
import { Typography } from '../Typography/Typography';
import SettingIcon from '../../icons/SettingIcon';
import { ITabs } from './ITabs';

const TabsWithContent: React.FC<ITabs> = ({ tabs, tabButtonProps, activeClassName }) => {
  const [activeId, setActiveId] = useState<string | number>(2);
  const [content, setContent] = useState('Content ' + activeId);
  const handleTabChange = (tabId: string | number) => {
    setActiveId(tabId);
    setContent('Content ' + tabId);
  };

  return (
    <>
      <Tabs
        tabs={tabs}
        activeTabId={activeId}
        tabButtonProps={tabButtonProps}
        activeClassName={activeClassName}
        onChange={handleTabChange}
      />
      {content}
    </>
  );
};

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: TabsWithContent,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs = [
  { id: 1, title: 'Tab 1' },
  { id: 2, title: 'Tab 2' },
  { id: 3, title: 'Tab 3', disabled: true },
  {
    id: 4,
    title: (
      <>
        <Typography variant="b3-medium">Settings</Typography>
        <SettingIcon />
      </>
    )
  }
];

export const Tab: Story = {
  args: {
    tabs: tabs
  }
};

export const CustomStyling: Story = {
  args: {
    tabs: tabs,
    tabButtonProps: {
      container: {
        className: style.customTabButton
      },
      activeButtonClass: style.activeTabButton
    },
    activeClassName: style.customTabActive
  }
};
