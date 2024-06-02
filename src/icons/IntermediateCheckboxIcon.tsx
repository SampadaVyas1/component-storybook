import React from 'react';
import { SVG_COLOR_NAVY, SVG_COLOR_WHITE } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const IntermediateCheckboxIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_NAVY, ...props }) => {
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
      <g transform="translate(8.0000916,10.99997)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m 7.99991,1.00003 c 0,0.55229 -0.44772,1 -1,1 H 0.999907 c -0.552285,0 -1.0000001525,-0.44771 -1.0000001104,-1 C -9.30735e-5,0.447746 0.447622,3.05149e-5 0.999907,3.05307e-5 l 6.000003,6.112e-7 c 0.55228,0 1,0.4477148581 1,0.9999988581 z"
          fill={SVG_COLOR_WHITE}
        />
      </g>
    </svg>
  );
};

export default IntermediateCheckboxIcon;
