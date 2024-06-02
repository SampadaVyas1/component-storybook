import React from 'react';
import { SVG_COLOR_NAVY } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const CheckedRadioBlueIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_NAVY, ...props }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--twemoji"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle fill="#269" cx="18" cy="18" r="18"></circle>
      <circle fill="#BBDDF5" cx="18" cy="18" r="8"></circle>
    </svg>
  );
};

export default CheckedRadioBlueIcon;
