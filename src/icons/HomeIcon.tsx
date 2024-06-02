import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const HomeIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
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
          d="M20.25 20.25V10.8319C20.25 10.7273 20.2281 10.624 20.1858 10.5284C20.1435 10.4328 20.0817 10.3472 20.0044 10.2769L12.5044 3.19499C12.3663 3.06929 12.1863 2.99963 11.9995 2.99963C11.8128 2.99963 11.6328 3.06929 11.4947 3.19499L3.99469 10.2769C3.91751 10.3472 3.85587 10.433 3.81374 10.5285C3.7716 10.6241 3.74989 10.7274 3.75 10.8319V20.25"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 20.25H22.5"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.25 20.25V15C14.25 14.8011 14.171 14.6103 14.0303 14.4697C13.8897 14.329 13.6989 14.25 13.5 14.25H10.5C10.3011 14.25 10.1103 14.329 9.96967 14.4697C9.82902 14.6103 9.75 14.8011 9.75 15V20.25"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
