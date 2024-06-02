import styles from './Typography.module.scss';
import { ITypography } from './ITypography';
import React from 'react';

export const Typography: React.FC<ITypography> = ({
  variant = 'b2-regular',
  className,
  ...props
}) => {
  const classNames = [styles[variant], className].join(' ');
  return <p className={classNames} {...props} />;
};
