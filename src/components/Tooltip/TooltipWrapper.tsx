import React from 'react';
import style from './TooltipWrapper.module.scss';
import { Tooltip } from 'react-tooltip';
import { ITooltip } from './ITooltip';

const TooltipWrapper: React.FC<ITooltip> = ({ anchorElement, className, children, ...props }) => {
  const classNames = [style.tooltipContainer, style.customTooltip, className].join(' ');
  return (
    <Tooltip
      anchorSelect={anchorElement}
      place="bottom"
      variant={'light'}
      className={classNames}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipWrapper;
