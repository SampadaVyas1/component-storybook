import React from 'react';
import { IShimmer } from './IShimmer';
import style from './Shimmer.module.scss';
import appendClasses from 'utils/appendClasses';

const Shimmer: React.FC<IShimmer> = ({ variant = 'Rectangular', width, height, ...rest }) => {
  return (
    <>
      <div
        className={appendClasses(style.shimmerContainer, style.animatedBackground, style[variant.toLowerCase()])}
        style={{
          width: width ?? 'fit-content',
          height: height ?? 'fit-content',
        }}
        {...rest}
      />
    </>
  );
};

export default Shimmer;
