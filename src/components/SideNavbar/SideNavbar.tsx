import React from 'react';
import style from './SideNavbar.module.scss';
import SideNavbarItem from './SideNavbarItem/SideNavbarItem';
import { ISideNavbar } from './ISideNavbar';

export const SideNavbar: React.FC<ISideNavbar> = ({
  header,
  sideNavbarItems,
  footerContent,
  lowerPanelItems,
  sideNavbarItemProps,
  selectedId,
  onItemClick,
  classNames
}) => {
  const customClassNames = {
    sideNavBarContainer: classNames?.sideNavBarContainerClassName
      ? classNames?.sideNavBarContainerClassName
      : '',
    mainContainer: classNames?.mainContainerClassName ? classNames?.mainContainerClassName : '',
    supportingContainer: classNames?.supportingContainerClassName
      ? classNames?.supportingContainerClassName
      : '',
    footerContainer: classNames?.footerContainerClassName
      ? classNames?.footerContainerClassName
      : ''
  };

  return (
    <aside className={[style.sideNavBarContainer, customClassNames.sideNavBarContainer].join(' ')}>
      {header}
      <div className={[style.mainContainer, customClassNames.mainContainer].join(' ')}>
        {sideNavbarItems.map(({ id, item, disabled, disabledClassName }) => (
          <SideNavbarItem
            selectedId={selectedId}
            id={id}
            key={`navbarItem-${id}`}
            item={item}
            onItemClick={onItemClick}
            disabled={disabled}
            disabledClassName={disabledClassName}
            sideNavbarItemProps={sideNavbarItemProps}
          />
        ))}
      </div>
      <div className={[style.supportingContainer, customClassNames.supportingContainer].join(' ')}>
        {lowerPanelItems?.map(({ id, item, disabled, disabledClassName }) => (
          <SideNavbarItem
            id={id}
            key={`navbarItem-${id}`}
            item={item}
            selectedId={selectedId}
            onItemClick={onItemClick}
            disabled={disabled}
            disabledClassName={disabledClassName}
            sideNavbarItemProps={sideNavbarItemProps}
          />
        ))}
      </div>
      <div className={[style.footerContainer, customClassNames.footerContainer].join(' ')}>
        <hr className={style.footer} />
        {footerContent}
      </div>
    </aside>
  );
};
