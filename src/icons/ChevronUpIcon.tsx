import React from 'react';
import { SVG_COLOR_GREY_850 } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const ChevronUpIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_GREY_850, ...props }) => {
  return (
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
          d="M7 15L12 10L17 15"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronUpIcon;
