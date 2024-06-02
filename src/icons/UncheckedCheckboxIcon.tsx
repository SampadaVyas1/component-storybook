import React from 'react';
import { SVG_COLOR_NAVY } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const UncheckedCheckboxIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_NAVY, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="5" y="5" width="14" height="14" rx="3" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default UncheckedCheckboxIcon;
