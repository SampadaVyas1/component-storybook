import React from 'react';
import styles from './Input.module.scss';
import { IInputProps } from './IInput';

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ startAdornment, endAdornment, error, disabled, readOnly, containerProps, ...rest }, ref) => {
    const { className: containerClassName, ...restContainerProps } = containerProps || {};

    return (
      <div
        className={[
          styles.inputContainer,
          containerClassName,
          error ? styles.error : '',
          disabled ? styles.disabledInput : ''
        ].join(' ')}
        role="group"
        {...restContainerProps}
      >
        {startAdornment}
        <input
          ref={ref}
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={error}
          aria-placeholder={rest.placeholder?.toString()}
          aria-required={rest.required}
          style={{ ...(readOnly ? { caretColor: 'transparent' } : {}), ...rest.style }}
          {...rest}
        />
        {endAdornment}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
