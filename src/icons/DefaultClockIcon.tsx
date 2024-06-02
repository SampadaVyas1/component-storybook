import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const DefaultClockIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99325 1.33333C4.31325 1.33333 1.33325 4.32 1.33325 8C1.33325 11.68 4.31325 14.6667 7.99325 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8C14.6666 4.32 11.6799 1.33333 7.99325 1.33333ZM7.99992 13.3333C5.05325 13.3333 2.66659 10.9467 2.66659 8C2.66659 5.05333 5.05325 2.66667 7.99992 2.66667C10.9466 2.66667 13.3333 5.05333 13.3333 8C13.3333 10.9467 10.9466 13.3333 7.99992 13.3333ZM7.33325 4.66667H8.33325V8.16667L11.3333 9.94667L10.8333 10.7667L7.33325 8.66667V4.66667Z"
        fill={color}
      />
    </svg>
  );
};

export default DefaultClockIcon;
