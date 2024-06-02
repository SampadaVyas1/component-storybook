import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography/Typography';
import { ITabs } from '../Tabs/ITabs';
import { ISegmentControlProps } from './ISegmentControl';
import { action } from '@storybook/addon-actions';
import SettingIcon from '../../icons/SettingIcon';
import SegmentControl from './SegmentControl';
import style from './SegmentControl.module.scss';

const defaultProps: ITabs = {
  tabs: [
    { id: 1, title: <Typography variant="b3-regular">Segment 1</Typography> },
    { id: 2, title: <Typography variant="b3-regular">Segment 2</Typography> },
    { id: 3, title: <Typography variant="b3-regular">Segment 3</Typography>, disabled: true },
    {
      id: 4,
      title: (
        <>
          <Typography variant="b3-regular">Settings</Typography>
          <SettingIcon />
        </>
      )
    }
  ],
  activeTabId: 1,
  onChange: action('onChange')
};

const WrapperComponent: React.FC<ISegmentControlProps> = ({
  tabs,
  activeTabId,
  onChange,
  className,
  activeClassName,
  tabButtonProps,
  segmentsClassName
}) => {
  const [activeTab, setActiveTab] = useState(activeTabId);

  const handleTabClick = (index: number | string) => {
    setActiveTab(() => index);
    onChange(index);
  };

  const commonProps = {
    activeTabId: activeTab,
    onChange: handleTabClick
  };

  const storyProps = tabs
    ? { tabs: tabs, ...commonProps }
    : { tabs: defaultProps.tabs, ...commonProps };

  return (
    <SegmentControl
      tabs={storyProps.tabs}
      activeTabId={storyProps.activeTabId}
      onChange={storyProps.onChange}
      className={className}
      activeClassName={activeClassName}
      tabButtonProps={tabButtonProps}
      segmentsClassName={segmentsClassName}
    />
  );
};

const meta: Meta<typeof WrapperComponent> = {
  title: 'components/SegmentControl',
  component: WrapperComponent
};

export default meta;

type Story = StoryObj<typeof WrapperComponent>;

export const Default: Story = {
  args: {
    tabs: defaultProps.tabs,
    activeTabId: defaultProps.activeTabId,
    onChange: defaultProps.onChange
  }
};

export const CustomStyling: Story = {
  args: {
    tabs: defaultProps.tabs,
    activeTabId: defaultProps.activeTabId,
    onChange: defaultProps.onChange,
    className: style.customTabs,
    activeClassName: style.customActiveTab,
    segmentsClassName: style.customSegmentsWrapper
  }
};
