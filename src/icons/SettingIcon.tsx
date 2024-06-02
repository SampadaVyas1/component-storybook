import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const SettingIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.43 10.98C17.47 10.66 17.5 10.34 17.5 10C17.5 9.66 17.47 9.34 17.43 9.02L19.54 7.37C19.73 7.22 19.78 6.95 19.66 6.73L17.66 3.27C17.57 3.11 17.4 3.02 17.22 3.02C17.16 3.02 17.1 3.03 17.05 3.05L14.56 4.05C14.04 3.65 13.48 3.32 12.87 3.07L12.49 0.42C12.46 0.18 12.25 0 12 0H7.99996C7.74996 0 7.53996 0.18 7.50996 0.42L7.12996 3.07C6.51996 3.32 5.95996 3.66 5.43996 4.05L2.94996 3.05C2.88996 3.03 2.82996 3.02 2.76996 3.02C2.59996 3.02 2.42996 3.11 2.33996 3.27L0.339961 6.73C0.209961 6.95 0.269962 7.22 0.459962 7.37L2.56996 9.02C2.52996 9.34 2.49996 9.67 2.49996 10C2.49996 10.33 2.52996 10.66 2.56996 10.98L0.459962 12.63C0.269962 12.78 0.219961 13.05 0.339961 13.27L2.33996 16.73C2.42996 16.89 2.59996 16.98 2.77996 16.98C2.83996 16.98 2.89996 16.97 2.94996 16.95L5.43996 15.95C5.95996 16.35 6.51996 16.68 7.12996 16.93L7.50996 19.58C7.53996 19.82 7.74996 20 7.99996 20H12C12.25 20 12.46 19.82 12.49 19.58L12.87 16.93C13.48 16.68 14.04 16.34 14.56 15.95L17.05 16.95C17.11 16.97 17.17 16.98 17.23 16.98C17.4 16.98 17.57 16.89 17.66 16.73L19.66 13.27C19.78 13.05 19.73 12.78 19.54 12.63L17.43 10.98ZM15.45 9.27C15.49 9.58 15.5 9.79 15.5 10C15.5 10.21 15.48 10.43 15.45 10.73L15.31 11.86L16.2 12.56L17.28 13.4L16.58 14.61L15.31 14.1L14.27 13.68L13.37 14.36C12.94 14.68 12.53 14.92 12.12 15.09L11.06 15.52L10.9 16.65L10.7 18H9.29996L9.10996 16.65L8.94996 15.52L7.88996 15.09C7.45996 14.91 7.05996 14.68 6.65996 14.38L5.74996 13.68L4.68996 14.11L3.41996 14.62L2.71996 13.41L3.79996 12.57L4.68996 11.87L4.54996 10.74C4.51996 10.43 4.49996 10.2 4.49996 10C4.49996 9.8 4.51996 9.57 4.54996 9.27L4.68996 8.14L3.79996 7.44L2.71996 6.6L3.41996 5.39L4.68996 5.9L5.72996 6.32L6.62996 5.64C7.05996 5.32 7.46996 5.08 7.87996 4.91L8.93996 4.48L9.09996 3.35L9.29996 2H10.69L10.88 3.35L11.04 4.48L12.1 4.91C12.53 5.09 12.93 5.32 13.33 5.62L14.24 6.32L15.3 5.89L16.57 5.38L17.27 6.59L16.2 7.44L15.31 8.14L15.45 9.27ZM9.99996 6C7.78996 6 5.99996 7.79 5.99996 10C5.99996 12.21 7.78996 14 9.99996 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 9.99996 6ZM9.99996 12C8.89996 12 7.99996 11.1 7.99996 10C7.99996 8.9 8.89996 8 9.99996 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 9.99996 12Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingIcon;