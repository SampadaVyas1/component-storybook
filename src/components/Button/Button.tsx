import React from 'react';
import { IButton } from './IButton';
import style from './Button.module.scss';

export const Button: React.FC<IButton> = ({
  variant = 'Primary',
  isActive = false,
  className,
  size,
  ...props
}) => {
  return (
    <button
      className={[
        style.button,
        style[variant.toLocaleLowerCase()],
        isActive && variant == 'Tab' ? style.activeTab : '',
        size ? style[size.toLocaleLowerCase()] : '',
        className
      ].join(' ')}
      {...props}
    />
  );
};
