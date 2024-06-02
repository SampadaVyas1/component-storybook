import React from 'react';
import { ITabs } from './ITabs';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import styles from './Tabs.module.scss';

const Tabs: React.FC<ITabs> = ({
  tabs,
  activeTabId,
  onChange,
  className,
  activeClassName,
  tabButtonProps
}) => {
  const { className: containerClass, ...restTabButtonProps } = tabButtonProps?.container || {};
  const classNames = [containerClass, styles.tabButton].join(' ');

  return (
    <section className={[styles.tabs, className].join(' ')}>
      {tabs.map(({ id, title, disabled }) => (
        <Button
          variant="Tab"
          isActive={activeTabId === id}
          onClick={() => onChange(id)}
          key={`tab-${id}`}
          disabled={disabled}
          className={[activeTabId === id ? activeClassName : '', classNames].join(' ')}
          type="button"
          {...restTabButtonProps}
        >
          {typeof title === 'string' ? (
            <Typography
              variant="b3-regular"
              className={activeTabId == id ? tabButtonProps?.activeButtonClass : ''}
              {...tabButtonProps?.typographyProps}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
        </Button>
      ))}
    </section>
  );
};

export default Tabs;
