import { forwardRef } from 'react';
import { ITextarea } from './ITextarea';
import styles from './Textarea.module.scss';

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ error, resize, className, ...rest }, ref) => {
    return (
      <textarea
        className={[
          styles.textarea,
          error ? styles.error : '',
          resize ? '' : styles.removeResize,
          className
        ].join(' ')}
        {...rest}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        aria-multiline="true"
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
