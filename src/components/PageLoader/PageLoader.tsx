import React from 'react';
import { IPageLoader } from './IPageLoader';
import Loader from '../Loader/Loader';
import styles from './PageLoader.module.scss';
import { Typography } from '../Typography/Typography';

const PageLoader: React.FC<IPageLoader> = ({
  loaderProps,
  show,
  backdropStyles,
  text,
  typographyProps,
  textPosition = 'Bottom'
}) => {
  if (!show) return <></>;

  return (
    <>
      {show && (
        <div
          className={[styles.pageLoaderContainer, styles[textPosition.toLocaleLowerCase()]].join(
            ' '
          )}
          style={{ ...backdropStyles }}
        >
          <Loader show={show} {...loaderProps} />
          <Typography {...typographyProps}>{text}</Typography>
        </div>
      )}
    </>
  );
};

export default PageLoader;
