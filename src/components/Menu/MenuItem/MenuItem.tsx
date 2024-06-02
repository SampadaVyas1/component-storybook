import React from 'react';
import { Typography } from '../../Typography/Typography';
import { IMenuItem } from './IMenuItem';
import styles from './MenuItem.module.scss';

const MenuItem: React.FC<IMenuItem> = ({
  content,
  id,
  onClick,
  disabled,
  typographyProps,
  menuItemClassName
}) => {
  return (
    <div
      className={[styles.menuItem, disabled ? styles.disabled : '', menuItemClassName].join(' ')}
      onClick={() => !disabled && onClick?.(id)}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={() => !disabled && onClick?.(id)}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-label={typeof content === 'string' ? content : undefined}
    >
      {typeof content === 'string' ? (
        <Typography variant="b3-regular" {...typographyProps}>
          {content}
        </Typography>
      ) : (
        content
      )}
    </div>
  );
};

export default MenuItem;
