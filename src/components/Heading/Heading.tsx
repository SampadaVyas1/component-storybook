import React from 'react';
import style from './Heading.module.scss';
import { IHeading } from './IHeading';

const Heading: React.FC<IHeading> = ({ variant = 'H1', className = '', ...props }) => {
  switch (variant) {
    case 'H1':
      return <h1 className={`${style.heading} ${style.heading1} ${className}`} {...props} />;
    case 'H2':
      return <h2 className={`${style.heading} ${style.heading2} ${className}`} {...props} />;
    case 'H3':
      return <h3 className={`${style.heading} ${style.heading3} ${className}`} {...props} />;
    case 'H4':
      return <h4 className={`${style.heading} ${style.heading4} ${className}`} {...props} />;
    case 'H5':
      return <h5 className={`${style.heading} ${style.heading5} ${className}`} {...props} />;
    default:
      return null;
  }
};

export default Heading;
