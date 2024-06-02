import React from 'react';
import { IAlert } from './IAlert';
import style from './Alert.module.scss';
import CrossIcon from '../../icons/CrossIcon';

export const Alert: React.FC<IAlert> = ({
  variant = 'Default',
  layout = 'Relative',
  position = 'TopRight',
  title,
  content,
  actions,
  alertIcon,
  hideAlertIcon = false,
  hideCloseButton = false,
  className,
  onClose,
  ...props
}) => {
  const handleCloseButtonClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      onClose?.();
    }
  };

  return (
    <div
      className={[
        style.alertContainer,
        ['Success', 'Error', 'Warning'].includes(variant)
          ? style[variant.toLocaleLowerCase() + 'Alert']
          : style.defaultAlert,
        !actions ? style.noActionsContainer : '',
        layout === 'Fixed' ? style.fixedLayout : '',
        layout === 'Fixed' ? style[position.charAt(0).toLowerCase() + position.substring(1)] : '',
        className
      ].join(' ')}
      {...props}
    >
      <div className={style.contentWrapper}>
        {!hideAlertIcon && alertIcon}

        <div className={style.content}>
          {title && (
            <div
              className={[
                style.title,
                ['Success', 'Error', 'Warning'].includes(variant)
                  ? style[variant.toLocaleLowerCase() + 'Title']
                  : style.defaultTitle
              ].join(' ')}
            >
              {title}
            </div>
          )}
          {content}
        </div>

        {!hideCloseButton && (
          <CrossIcon
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={handleCloseButtonClick}
            className={style.closeButton}
          />
        )}
      </div>

      <div className={style.actionsWrapper}>{actions}</div>
    </div>
  );
};
