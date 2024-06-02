import React from 'react';
import styles from './Accordion.module.scss';
import { IAccordion } from './IAccordion';
import ArrowIcon from '../../icons/ArrowIcon';

const Accordion: React.FC<IAccordion> = ({
  title = 'Default Title',
  openIcon,
  children,
  closeIcon,
  className,
  disabled,
  childrenWrapperClassName,
  keepMounted = true,
  isOpen,
  onAccordionClick
}) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onAccordionClick?.();
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={[styles.container, className, disabled ? styles.disabledAccordion : ''].join(
          ' '
        )}
        onClick={onAccordionClick}
        onKeyDown={onKeyDown}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>
          {(() => {
            if (isOpen) {
              return closeIcon ? closeIcon : <ArrowIcon className={styles.upIcon} />;
            } else {
              return openIcon ? openIcon : <ArrowIcon />;
            }
          })()}
        </div>
      </div>
      {(isOpen || keepMounted) && (
        <div
          className={[
            !isOpen ? styles.hideContent : '',
            styles.content,
            childrenWrapperClassName
          ].join(' ')}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Accordion;
