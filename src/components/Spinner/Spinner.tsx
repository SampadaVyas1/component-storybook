import React from 'react';
import { ISpinner } from './interfaces';
import style from './Spinner.module.scss';
import appendClasses from 'utils/appendClasses';

export const Spinner: React.FC<ISpinner> = ({ size = 'Default', color = 'Light', ...props }) => {
  return <div className={appendClasses(style.loader, style[`size${size}`], style[`color${color}`])} {...props}></div>;
};
