import React from 'react';
import { SVGProps } from './interfaces';
import { SVG_GREY_ICON } from '../utils/svg/constant';

const RefreshIcon: React.FC<SVGProps> = ({ color = SVG_GREY_ICON, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.65 2.35C12.2 0.9 10.21 0 8.00001 0C3.58001 0 0.0100098 3.58 0.0100098 8C0.0100098 12.42 3.58001 16 8.00001 16C11.73 16 14.84 13.45 15.73 10H13.65C12.83 12.33 10.61 14 8.00001 14C4.69001 14 2.00001 11.31 2.00001 8C2.00001 4.69 4.69001 2 8.00001 2C9.66001 2 11.14 2.69 12.22 3.78L9.00001 7H16V0L13.65 2.35Z"
        fill={color}
      />
    </svg>
  );
};

export default RefreshIcon;
