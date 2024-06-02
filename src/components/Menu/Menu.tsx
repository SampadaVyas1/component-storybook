import React, { useRef, useState } from 'react';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem/MenuItem';
import { IMenu } from './IMenu';
import useOutsideClick from '../../hooks/useOutsideClick';
import { Button } from '../Button/Button';
import useOverlayPosition from '../../hooks/useOverlayPosition';

const Menu: React.FC<IMenu> = ({
  menuItems,
  TriggerElement,
  triggerElementClassName,
  menuPosition = 'BottomLeft',
  onMenuItemClick,
  menuItemClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { position } = useOverlayPosition(menuContainerRef, containerRef, {
    defaultPosition: menuPosition,
    open: isOpen
  });

  const formatPosition = (position) => {
    const positionString = position ? position.charAt(0).toLowerCase() + position.slice(1) : '';
    return positionString;
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMenuItem = (id: string) => {
    onMenuItemClick?.(id);
  };

  useOutsideClick(containerRef, onClose);

  return (
    <section ref={menuContainerRef} className={styles.menuContainer}>
      <Button
        ref={buttonContainerRef}
        variant="Tertiary"
        className={[styles.triggerElement, triggerElementClassName].join(' ')}
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="menu"
        type="button"
        {...props}
      >
        {TriggerElement}
      </Button>

      {isOpen && (
        <div
          ref={containerRef}
          className={[styles.menu, position ? styles[formatPosition(position)] : ''].join(' ')}
          role="menu"
          aria-labelledby="trigger-button"
        >
          {menuItems.map(({ id, content }) => (
            <MenuItem
              menuItemClassName={menuItemClassName}
              key={`menu-item-${id}`}
              id={id}
              content={content}
              onClick={handleMenuItem}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
