import { forwardRef } from 'react';
import { IInputText } from './interfaces';
import style from './InputText.module.scss';
import appendClasses from 'utils/appendClasses';

export const InputText = forwardRef<HTMLInputElement, IInputText>(
  ({ fullWidth, SVGIcon, disabled, error, ...props }, ref) => {
    if (SVGIcon)
      return (
        <div
          className={appendClasses(
            style.inputWrapper,
            fullWidth ? style.fullWidth : '',
            disabled ? style.disabled : '',
            error ? style.errorContainer : '',
          )}
        >
          <div className={style.iconWrapper}>{SVGIcon}</div>
          <input
            className={appendClasses(
              style.inputContainer,
              fullWidth ? style.fullWidth : '',
              props?.className ? props?.className : '',
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        </div>
      );

    return (
      <input
        {...props}
        className={appendClasses(
          style.inputContainerMain,
          fullWidth ? style.fullWidth : '',
          error ? style.errorContainer : '',
          props?.className ? props?.className : '',
        )}
        ref={ref}
        disabled={disabled}
      />
    );
  },
);
