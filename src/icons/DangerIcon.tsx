import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const DangerIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9 0H6.1C5.57 0 5.06 0.21 4.68 0.59L0.58 4.69C0.21 5.06 0 5.57 0 6.1V11.9C0 12.43 0.21 12.94 0.59 13.31L4.69 17.41C5.06 17.79 5.57 18 6.1 18H11.9C12.43 18 12.94 17.79 13.31 17.41L17.41 13.31C17.79 12.94 18 12.43 18 11.9V6.1C18 5.57 17.79 5.06 17.41 4.69L13.31 0.59C12.94 0.21 12.43 0 11.9 0ZM12.54 12.54C12.15 12.93 11.52 12.93 11.13 12.54L9 10.41L6.88 12.53C6.49 12.92 5.86 12.92 5.47 12.53C5.08 12.14 5.08 11.51 5.47 11.12L7.59 9L5.46 6.88C5.07 6.49 5.07 5.86 5.46 5.47C5.85 5.08 6.48 5.08 6.87 5.47L9 7.59L11.12 5.47C11.51 5.08 12.14 5.08 12.53 5.47C12.92 5.86 12.92 6.49 12.53 6.88L10.41 9L12.53 11.12C12.93 11.51 12.93 12.15 12.54 12.54Z"
        fill={color}
      />
    </svg>
  );
};

export default DangerIcon;
