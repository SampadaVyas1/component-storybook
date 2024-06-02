import React from 'react';
import { IParagraph } from './IParagraph';
import style from './Paragraph.module.scss';

const Paragraph: React.FC<IParagraph> = ({ variant = 'Regular', className = '', ...props }) => {
  switch (variant) {
    case 'Light':
      return <p className={`${style.paragraph} ${style.light} ${className}`} {...props} />;
    case 'Regular':
      return <p className={`${style.paragraph} ${style.regular} ${className}`} {...props} />;
    case 'Medium':
      return <p className={`${style.paragraph} ${style.medium} ${className}`} {...props} />;
    case 'Bold':
      return <p className={`${style.paragraph} ${style.bold} ${className}`} {...props} />;
    // case 'ExtraBold':
    //     return <p className={`${style.paragraph} ${style.extraBold} ${className}`} {...props} />
    default:
      return null;
  }
};

export default Paragraph;
