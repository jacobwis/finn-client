import * as React from 'react';
import { Link } from 'react-router-dom';
import * as AppContext from '../contexts/AppContext';
import Button from './Button';
import IconButton from './IconButton';
import SearchInput from './SearchInput';
import UserDropdown from './UserDropdown';

const NavBar: React.StatelessComponent = () => (
  <AppContext.Consumer>
    {appContext => {
      const currentUser = appContext.currentUser;
      const isGuest = currentUser === null;
      return (
        <div className="container">
          <div className="NavBar">
            <div className="NavBar__mobile-content">
              <IconButton
                type="text"
                theme="secondary"
                dataTestID="menu-toggle"
                onClick={appContext.showMobileMenu}
              >
                <IconButton.Icon icon="bars" prefix="solid" />
              </IconButton>
            </div>
            <div className="NavBar__logo-wrapper">
              <Link className="NavBar__logo" to="/">
                Finn
              </Link>
            </div>
            <div className="NavBar__desktop-content">
              <SearchInput />
              {isGuest ? (
                <div className="NavBar__auth-buttons">
                  <Button
                    dataTestID="sign-in-btn"
                    onClick={appContext.showAuthModal}
                    type="outline"
                  >
                    Sign In
                  </Button>
                  <Button dataTestID="sign-up-btn" onClick={appContext.showAuthModal}>
                    Sign Up
                  </Button>
                </div>
              ) : (
                <UserDropdown user={currentUser} />
              )}
            </div>
          </div>
        </div>
      );
    }}
  </AppContext.Consumer>
);

export default NavBar;
