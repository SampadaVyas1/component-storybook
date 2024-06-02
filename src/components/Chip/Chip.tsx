import styles from './Chip.module.scss';
import React from 'react';
import { IChip } from './IChip';
import { SVG_COLOR_BLACK, SVG_COLOR_GREY } from '../../utils/svg/constant';
import CrossIcon from '../../icons/CrossIcon';

const Chip: React.FC<IChip> = ({
  variant = 'Circular',
  isRemovable = false,
  subVariant = 'Filled',
  children,
  disabled = false,
  className,
  onRemoveIconClick,
  RemoveIcon = CrossIcon,
  active = false,
  onActive,
  ...rest
}) => {
  const classNames = [
    styles.chip,
    styles[`${variant.toLocaleLowerCase()}`],
    styles[`${subVariant.toLocaleLowerCase()}`],
    disabled ? styles['disabled'] : '',
    active ? styles['active'] : '',
    className
  ].join(' ');

  return (
    <div
      className={classNames}
      role="button"
      tabIndex={0}
      onKeyDown={() => onActive?.(!active)}
      onClick={() => onActive?.(!active)}
      {...rest}
    >
      {children}
      {isRemovable && (
        <RemoveIcon
          onClick={onRemoveIconClick}
          className={[styles.removeIcon, disabled ? styles.disabled : ''].join(' ')}
          color={disabled ? SVG_COLOR_GREY : active ? SVG_COLOR_BLACK : SVG_COLOR_BLACK}
        />
      )}
    </div>
  );
};

export default Chip;
