import React, { useEffect, useState } from 'react';
import style from './ProgressIndicator.module.scss';
import { Typography } from '../Typography/Typography';
import { IProgressIndicator } from './IProgressIndicator';
import { SVG_COLOR_BLUE, SVG_COLOR_GREY } from '../../utils/svg/constant';

const ProgressIndicator: React.FC<IProgressIndicator> = ({
  progress,
  progressColor = SVG_COLOR_BLUE,
  progressBgColor = SVG_COLOR_GREY,
  hideTooltip = false,
  tooltipPlacement = 'Top',
  tooltipOnHover = false,
  hideText = false,
  textPlacement = 'Right',
  className,
  tooltipProps,
  progressTextProps,
  ...props
}) => {
  const [indicatorWidth, setIndicatorWidth] = useState(progress + '%');

  const progressPercentage = ((progress / 100) * 100).toFixed(2).replace(/\.00$/, '');

  const textPlacementClassName = textPlacement === 'Right' ? 'rightText' : 'bottomText';

  useEffect(() => {
    setIndicatorWidth(progressPercentage.toString() + '%');
  }, [progressPercentage]);

  return (
    <div
      className={[style.mainContainer, style[textPlacementClassName], className].join(' ')}
      {...props}
    >
      <div
        className={[style.progressWrapper, tooltipOnHover ? style.hoveringTooltip : ''].join(' ')}
        style={{ backgroundColor: progressBgColor }}
      >
        <span
          className={style.progressIndicator}
          style={{ width: indicatorWidth, backgroundColor: progressColor }}
        >
          {!hideTooltip ? (
            <span
              className={[
                style.percentageTooltip,
                style[tooltipPlacement.toLocaleLowerCase()]
              ].join(' ')}
              {...tooltipProps?.container}
            >
              <Typography
                variant="b3-regular"
                {...tooltipProps?.typographyProps}
              >{`${progressPercentage}%`}</Typography>
            </span>
          ) : (
            <></>
          )}
        </span>
      </div>
      {!hideText ? (
        <Typography
          variant="b3-regular"
          className={style.percentageText}
          {...progressTextProps}
        >{`${progressPercentage}%`}</Typography>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProgressIndicator;
