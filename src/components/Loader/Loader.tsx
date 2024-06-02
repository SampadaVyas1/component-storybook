import React from 'react';
import { ILoader } from './ILoader';
import styles from './Loader.module.scss';
import { SVG_COLOR_BLUE, SVG_COLOR_GREY } from '../../utils/svg/constant';

const Loader: React.FC<ILoader> = ({
  variant = 'Circular',
  show,
  size = 'Small',
  loaderBgColor = SVG_COLOR_GREY,
  loaderColor = SVG_COLOR_BLUE
}) => {
  if (!show) return <></>;

  return (
    <>
      {variant === 'Linear' && (
        <div className={styles.linearLoaderContainer} style={{ backgroundColor: loaderBgColor }}>
          <div className={styles.linearLoader} style={{ backgroundColor: loaderColor }}></div>
        </div>
      )}

      {variant === 'Circular' && (
        <div
          className={[styles.circularLoaderContainer, styles[size.toLocaleLowerCase()]].join(' ')}
          style={{ borderColor: loaderBgColor }}
        >
          <div
            className={[styles.circularLoader, styles[size.toLocaleLowerCase()]].join(' ')}
            style={{ borderColor: loaderColor, borderTopColor: 'transparent' }}
          ></div>
        </div>
      )}

      {variant === 'Dotted' && (
        <div
          className={styles.dottedLoader}
          style={
            {
              '--loaderBgColor': loaderBgColor,
              '--loaderColor': loaderColor
            } as React.CSSProperties
          }
        >
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
    </>
  );
};

export default Loader;
