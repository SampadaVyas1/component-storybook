import { Typography } from '../../Typography/Typography';
import { ISideNavbarItem } from './ISideNavbarItem';
import style from './SideNavbarItem.module.scss';
import React from 'react';

const SideNavbarItem: React.FC<ISideNavbarItem> = ({
  id,
  item,
  selectedId,
  disabled,
  disabledClassName,
  onItemClick,
  sideNavbarItemProps
}) => {
  return (
    <div
      {...sideNavbarItemProps?.container}
      className={[
        style.sideNavbarItemContainer,
        selectedId === id ? style.sideNavbarItemContainerSelected : '',
        disabled ? [style.disabledItem, disabledClassName].join('') : '',
        sideNavbarItemProps?.container?.className
      ].join(' ')}
      onClick={() => onItemClick?.(id)}
      onKeyDown={() => onItemClick?.(id)}
      role="button"
      tabIndex={0}
    >
      {typeof item === 'string' ? (
        <Typography variant="b3-regular" {...sideNavbarItemProps?.typographyProps}>
          {item}
        </Typography>
      ) : (
        <>{item}</>
      )}
    </div>
  );
};

export default SideNavbarItem;
