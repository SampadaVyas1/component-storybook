import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IModal } from './IModal';
import styles from './Modal.module.scss';
import CrossIcon from '../../icons/CrossIcon';

export const Modal: React.FC<IModal> = ({
  open,
  header,
  children,
  hideCloseButton = false,
  disablePortal = false,
  disableBackdropClose = false,
  attachedNode = document.body,
  keepMounted = false,
  className,
  backdropStyles,
  closeIconProps,
  mainContainerProps,
  headerContainerProps,
  bodyContainerProps,
  onClose,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { className: mainContainerClassName, ...restMainContainerProps } = mainContainerProps || {};
  const { className: headerContainerClassName, ...restHeaderContainerProps } =
    headerContainerProps || {};
  const { className: bodyContainerClassName, ...restBodyContainerProps } = bodyContainerProps || {};

  const onCloseButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
      closeModal();
    }
  };

  const onDialogKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    onClose?.();
    dialogRef.current?.close();
  };

  const modalContainer = (
    <dialog
      ref={dialogRef}
      onKeyDown={onDialogKeyDown}
      className={[styles.modalContainer, className].join(' ')}
      {...props}
    >
      <div
        className={[styles.backdrop, disableBackdropClose ? styles.disableBackdrop : ''].join(' ')}
        onClick={() => {
          if (!disableBackdropClose) closeModal();
        }}
        aria-hidden="true"
        style={{ ...backdropStyles }}
      />
      <div
        className={[styles.mainContainer, mainContainerClassName].join(' ')}
        {...restMainContainerProps}
      >
        {header || !hideCloseButton ? (
          <div
            className={[styles.headerWrapper, headerContainerClassName].join(' ')}
            {...restHeaderContainerProps}
          >
            {header}

            {!hideCloseButton && (
              <CrossIcon
                role="button"
                aria-label="close-button"
                className={styles.closeModalButton}
                onClick={closeModal}
                tabIndex={0}
                onKeyDown={onCloseButtonKeyDown}
                {...closeIconProps}
              />
            )}
          </div>
        ) : (
          <></>
        )}

        <div
          className={[styles.bodyWrapper, bodyContainerClassName].join(' ')}
          {...restBodyContainerProps}
        >
          {children}
        </div>
      </div>
    </dialog>
  );

  useEffect(() => {
    open ? dialogRef.current?.showModal() : closeModal();
  }, [open, hideCloseButton, keepMounted]);

  if (!open && !keepMounted) return <></>;

  if (disablePortal) return modalContainer;

  return createPortal(modalContainer, attachedNode);
};

export default Modal;
