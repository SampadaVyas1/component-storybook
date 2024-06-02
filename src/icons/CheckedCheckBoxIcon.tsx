import React from 'react';
import { SVG_COLOR_NAVY, SVG_COLOR_WHITE } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const CheckedCheckboxIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_NAVY, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="4" fill={color} />
      <g transform="translate(6.9999996,8.2071086)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m 2.12132,2.79289 c -0.39052,-0.39052 -1.02369,-0.39052 -1.414213,0 -0.390525,0.39053 -0.390525,1.02369 0,1.41422 L 3.29289,6.79289 C 3.30301,6.80301 3.3133,6.81287 3.32373,6.82246 3.37623,6.87073 3.43263,6.91235 3.49187,6.94735 3.87536,7.17388 4.3776,7.1224 4.70711,6.79289 M 4.70881,6.79118 9.29289,2.2071 c 0.39053,-0.39052 0.39053,-1.02368 0,-1.41421 C 8.90237,0.402366 8.2692,0.402366 7.87868,0.792891 L 4,4.67157 2.12132,2.79289"
          fill={SVG_COLOR_WHITE}
        />
      </g>
    </svg>
  );
};

export default CheckedCheckboxIcon;
