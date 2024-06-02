import React from 'react';
import { SVG_COLOR_NAVY } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const UncheckedRadioIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_NAVY, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default UncheckedRadioIcon;
