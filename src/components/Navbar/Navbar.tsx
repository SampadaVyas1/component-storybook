import React, { useEffect, useState } from 'react';
import { INavbar } from './INavbar';
import style from './Navbar.module.scss';
import HamburgerIcon from '../../icons/HamburgerIcon';
import SideDrawer from '../SideDrawer/SideDrawer';
import { TABLET_WIDTH } from './constant';

const Navbar: React.FC<INavbar> = ({
  logoIcon,
  navbarLinks,
  navbarActionItems,
  onLogoClick,
  className,
  sideDrawerPosition = 'Left'
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > TABLET_WIDTH) setShowMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className={[style.navbar, className].join(' ')}>
        {windowWidth <= TABLET_WIDTH ? (
          <div
            className={style.dropdownMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => {
              const key = event.key;
              if (key === 'Enter' || key === ' ') setShowMenu(true);
            }}
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <HamburgerIcon />
          </div>
        ) : (
          ''
        )}
        <SideDrawer
          open={showMenu}
          position={sideDrawerPosition}
          onRequestClose={() => setShowMenu(false)}
        >
          {navbarLinks}
        </SideDrawer>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => undefined}
          className={style.navbarLogo}
          onClick={onLogoClick}
        >
          {logoIcon}
        </div>
        {windowWidth <= TABLET_WIDTH ? (
          ''
        ) : (
          <div className={style.navbarContent}>{navbarLinks}</div>
        )}
        <div>{navbarActionItems}</div>
      </nav>
    </>
  );
};

export default Navbar;
