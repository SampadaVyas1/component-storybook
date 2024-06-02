import { SVG_COLOR_GREY } from '../utils/svg/constant.ts';
import { SVGProps } from './interfaces.ts';
import React from 'react';

const ArrowIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_GREY, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g>
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default ArrowIcon;
