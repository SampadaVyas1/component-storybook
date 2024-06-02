import { ChangeEvent, forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import CheckedRadioIcon from '../../icons/CheckedRadioIcon';
import UncheckedRadioIcon from '../../icons/UncheckedRadioIcon';
import { SVG_COLOR_GREY } from '../../utils/svg/constant';
import { IRadioProps } from './IRadio';
import styles from './Radio.module.scss';

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  (
    {
      checked,
      disabled,
      CheckedIcon = CheckedRadioIcon,
      UncheckedIcon = UncheckedRadioIcon,
      radioContainerProps,
      className,
      onChange,
      ...radioProps
    },
    ref
  ) => {
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    const inputRef = useRef<HTMLInputElement>(null);

    const renderIcon = useMemo(() => {
      if (disabled)
        return checked ? (
          <CheckedIcon color={disabled ? SVG_COLOR_GREY : ''} />
        ) : (
          <UncheckedIcon color={disabled ? SVG_COLOR_GREY : ''} />
        );
      return checked ? (
        <CheckedIcon className={styles.radioIcon} />
      ) : (
        <UncheckedIcon className={styles.radioIcon} />
      );
    }, [disabled, checked]);

    const handleRadioClick = () => {
      if (!disabled)
        onChange?.({
          target: {
            type: 'checkbox',
            checked: !checked
          } as HTMLInputElement
        } as ChangeEvent<HTMLInputElement>);
    };

    return (
      <div
        {...radioContainerProps}
        className={[
          styles.radioButton,
          disabled ? styles.disabledRadio : '',
          radioContainerProps?.className
        ].join(' ')}
        onClick={handleRadioClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if ((event.code === 'Enter' || event.code === 'Space') && !disabled) {
            handleRadioClick();
          }
        }}
      >
        <input
          type="radio"
          ref={inputRef}
          checked={checked}
          disabled={disabled}
          className={[styles.radioInput, className].join(' ')}
          aria-disabled={disabled}
          aria-label={radioProps?.['aria-label']}
          aria-describedby={radioProps?.['aria-describedby']}
          tabIndex={-1}
          {...radioProps}
        />
        <div className={styles.icon}>{renderIcon}</div>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default memo(Radio);
