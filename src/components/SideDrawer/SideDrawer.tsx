import styles from './SideDrawer.module.scss';
import { ISideDrawer } from './ISideDrawer.ts';
import React from 'react';

export const SideDrawer: React.FC<ISideDrawer> = ({
  children,
  open = false,
  contentWrapperProps,
  backdropStyles,
  position = 'Right',
  onRequestClose
}) => {
  return (
    <section
      aria-hidden={!open}
      className={[styles.drawerContainer, open ? styles.open : ''].join(' ')}
    >
      <div
        {...contentWrapperProps}
        className={[
          styles.drawer,
          styles[position.toLocaleLowerCase()],
          contentWrapperProps?.className
        ].join(' ')}
        role="dialog"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          event.stopPropagation();
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      <div
        className={[styles.backdrop, open ? styles.open : ''].join(' ')}
        style={{ ...backdropStyles }}
        onClick={onRequestClose}
        aria-hidden="true"
      />
    </section>
  );
};

export default SideDrawer;
