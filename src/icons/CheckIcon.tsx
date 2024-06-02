import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const CheckIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 10.2L2.5 6.7C2.11 6.31 1.49 6.31 1.1 6.7C0.709995 7.09 0.709995 7.71 1.1 8.1L5.29 12.29C5.68 12.68 6.31 12.68 6.7 12.29L17.3 1.7C17.69 1.31 17.69 0.69 17.3 0.3C16.91 -0.0900003 16.29 -0.0900003 15.9 0.3L6 10.2Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
