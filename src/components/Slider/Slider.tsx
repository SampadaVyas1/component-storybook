import React, { useEffect, useRef, useState } from 'react';

import styles from './Slider.module.scss';
import { IRangeValue, ISlider } from './ISlider.ts';
import useOverlayPosition from '../../hooks/useOverlayPosition.ts';

const Slider: React.FC<ISlider> = ({
  min = 0,
  max = 100,
  value,
  step = 1,
  isOptionSlider = false,
  isRangeSlider = false,
  display,
  disabled = false,
  sliderThumbProps,
  sliderTrackProps,
  filledTrackProps,
  valueContainerProps,
  onChange,
  ariaLabel = 'Slider'
}) => {
  const [currentValue, setCurrentValue] = useState<number | IRangeValue>();
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const inputRef = useRef<HTMLInputElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderThumbRef = useRef<HTMLDivElement>(null);
  const displayElementRef = useRef<HTMLDivElement>(null);
  const displayPosition = display ? display : 'Top';
  const { position } = useOverlayPosition(sliderContainerRef, displayElementRef, {
    defaultPosition: displayPosition,
    open: display ? true : false
  });

  const { className: thumbClass, ...restThumbProps } = sliderThumbProps || {};
  const { className: trackClass, ...restTrackProps } = sliderTrackProps || {};
  const { className: filledTrackClass, ...restFilledTrackProps } = filledTrackProps || {};
  const { className: valueContainerClass, ...restValueContainerProps } = valueContainerProps || {};

  const center = (max + min) / 2;
  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;
  const valuePos =
    typeof currentValue === 'number' ? ((currentValue - min) / (max - min)) * 100 : 0;
  const centerPos = ((center - min) / (max - min)) * 100;
  const isValidCurrentValue = currentValue && typeof currentValue === 'number';

  useEffect(() => {
    const inputThumb = inputRef.current?.querySelector('::part(thumb)');

    inputThumb?.addEventListener('hover', () => {
      if (sliderThumbRef.current) {
        sliderThumbRef.current.style.backgroundColor = 'pink';
      }
    });

    setCurrentValue(isOptionSlider ? center : value);
    if (isRangeSlider && typeof value !== 'number') {
      setMinValue(value ? value.min : min);
      setMaxValue(value ? value.max : max);
    }
  }, [isRangeSlider, isOptionSlider, value]);

  const handleMinChange = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMinVal = Math.min(value, maxValue - step);
    setMinValue(newMinVal);
    onChange?.({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (event) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMaxVal = Math.max(value, minValue + step);
    setMaxValue(newMaxVal);
    onChange?.({ min: minValue, max: newMaxVal });
  };

  const handleInputChange = (event) => {
    event.stopPropagation();
    const value = parseFloat(event.target.value);
    setCurrentValue(value);
    onChange?.(value);
  };

  return (
    <div ref={sliderContainerRef} className={styles.sliderParent} aria-label={ariaLabel}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <input
            disabled={disabled}
            ref={inputRef}
            className={[styles.input, disabled ? styles.disabled : ''].join(' ')}
            type="range"
            min={min}
            max={max}
            value={isRangeSlider ? minValue : isValidCurrentValue ? currentValue : 0}
            step={step}
            onChange={(event) => {
              isRangeSlider ? handleMinChange(event) : handleInputChange(event);
            }}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={isRangeSlider ? minValue : isValidCurrentValue ? currentValue : 0}
            aria-valuetext={ariaLabel}
            aria-disabled={disabled}
            aria-orientation="horizontal"
            aria-labelledby="sliderLabel"
          />
          {isRangeSlider && (
            <input
              disabled={disabled}
              className={styles.input}
              type="range"
              value={maxValue}
              min={min}
              max={max}
              step={step}
              onChange={handleMaxChange}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={maxValue}
              aria-valuetext={ariaLabel}
              aria-disabled={disabled}
              aria-orientation="horizontal"
              aria-labelledby="sliderLabel"
            />
          )}
        </div>
        <div className={styles.controlWrapper}>
          {isRangeSlider && (
            <div>
              {position === 'Top' && (
                <div
                  ref={displayElementRef}
                  className={[styles.topLabel, valueContainerClass].join(' ')}
                  style={{
                    left: isRangeSlider ? `${minPos}%` : `${valuePos}%`
                  }}
                  {...restValueContainerProps}
                >
                  {minValue}
                </div>
              )}
              <div
                className={[
                  styles.control,
                  disabled ? styles.disabledControl : '',
                  thumbClass
                ].join(' ')}
                style={{ left: isRangeSlider ? `${minPos}%` : `${valuePos}%` }}
                {...restThumbProps}
              />
              {position === 'Bottom' && (
                <div
                  ref={displayElementRef}
                  className={[styles.bottomLabel, valueContainerClass].join(' ')}
                  style={{
                    left: isRangeSlider ? `${minPos}%` : `${valuePos}%`
                  }}
                  {...restValueContainerProps}
                >
                  {minValue}
                </div>
              )}
            </div>
          )}
          <div
            className={[styles.rail, disabled ? styles.disabledTrack : '', trackClass].join(' ')}
            {...restTrackProps}
          >
            <div
              className={[styles.innerRail, filledTrackClass].join(' ')}
              style={
                isOptionSlider
                  ? {
                      left:
                        isValidCurrentValue && currentValue < center
                          ? `${valuePos}%`
                          : `${centerPos}%`,
                      right:
                        isValidCurrentValue && currentValue < center
                          ? `${centerPos}%`
                          : `${valuePos}%`,
                      width: `${Math.abs(centerPos - valuePos)}%`
                    }
                  : {
                      left: `${minPos}%`,
                      right: isRangeSlider ? `${100 - maxPos}%` : `${100 - valuePos}%`
                    }
              }
              {...restFilledTrackProps}
            />
          </div>
          <div>
            <div>
              {position === 'Top' && (
                <div
                  className={styles.topLabel}
                  style={{
                    left: isRangeSlider ? `${maxPos}%` : `${valuePos}%`
                  }}
                >
                  {isRangeSlider ? maxValue : isValidCurrentValue ? currentValue : valuePos}
                </div>
              )}
              <div
                className={[
                  styles.control,
                  disabled ? styles.disabledControl : '',
                  thumbClass
                ].join(' ')}
                ref={sliderThumbRef}
                style={{ left: isRangeSlider ? `${maxPos}%` : `${valuePos}%` }}
                {...restThumbProps}
              />
              {position === 'Bottom' && (
                <div
                  className={styles.bottomLabel}
                  style={{
                    left: isRangeSlider ? `${maxPos}%` : `${valuePos}%`
                  }}
                >
                  {isRangeSlider ? maxValue : isValidCurrentValue ? currentValue : 0}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
