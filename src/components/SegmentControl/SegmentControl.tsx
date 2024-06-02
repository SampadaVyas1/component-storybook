import React from 'react';
import { ISegmentControlProps } from './ISegmentControl';
import style from './SegmentControl.module.scss';
import Tabs from '../Tabs/Tabs';

const SegmentControl: React.FC<ISegmentControlProps> = ({
  segmentsClassName,
  className,
  activeClassName,
  ...restTabProps
}) => {
  return (
    <div className={[style.segments, segmentsClassName].join(' ')}>
      <Tabs
        className={className ? className : style.segmentTabs}
        activeClassName={activeClassName ? activeClassName : style.activeSegment}
        {...restTabProps}
      />
    </div>
  );
};

export default SegmentControl;
