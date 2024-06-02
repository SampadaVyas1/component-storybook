import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const CloudArrowIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g>
        <path
          d="M5.99959 13H4.49959C4.00331 12.9994 3.51284 12.8932 3.06072 12.6886C2.6086 12.484 2.20516 12.1855 1.87718 11.8131C1.54921 11.4406 1.30418 11.0027 1.15838 10.5283C1.01257 10.0539 0.96931 9.55398 1.03147 9.06162C1.09363 8.56925 1.25979 8.09573 1.51892 7.67248C1.77805 7.24923 2.12422 6.88592 2.53448 6.60667C2.94473 6.32742 3.40968 6.13861 3.89848 6.05276C4.38727 5.96692 4.88873 5.986 5.36959 6.10875"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8C5 7.20774 5.18827 6.42682 5.54928 5.7216C5.9103 5.01637 6.43373 4.40703 7.07645 3.94379C7.71916 3.48055 8.46276 3.17667 9.24596 3.05719C10.0292 2.93771 10.8295 3.00605 11.5811 3.25658C12.3327 3.50712 13.0141 3.93267 13.5689 4.49817C14.1238 5.06368 14.5363 5.75294 14.7726 6.50916C15.0088 7.26539 15.0619 8.06692 14.9276 8.84771C14.7933 9.6285 14.4754 10.3662 14 11"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10L9.5 8L11.5 10"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 13V8"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CloudArrowIcon;
