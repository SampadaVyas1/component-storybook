import React from 'react';
import { SVG_COLOR_BLACK } from '../utils/svg/constant';
import { SVGProps } from './interfaces';

const FileArrowUpIcon: React.FC<SVGProps> = ({ color = SVG_COLOR_BLACK, ...props }) => {
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
          d="M12.5 14H3.5C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 2V5.5H13" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 9L8 7.5L9.5 9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11.5V7.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

export default FileArrowUpIcon;
