import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const ClockIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99337 0.333344C3.31337 0.333344 0.333374 3.32001 0.333374 7.00001C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00001C13.6667 3.32001 10.68 0.333344 6.99337 0.333344ZM7.00004 12.3333C4.05337 12.3333 1.66671 9.94668 1.66671 7.00001C1.66671 4.05334 4.05337 1.66668 7.00004 1.66668C9.94671 1.66668 12.3334 4.05334 12.3334 7.00001C12.3334 9.94668 9.94671 12.3333 7.00004 12.3333ZM6.33337 3.66668H7.33337V7.16668L10.3334 8.94668L9.83337 9.76668L6.33337 7.66668V3.66668Z"
        fill={color}
      />
    </svg>
  );
};

export default ClockIcon;
