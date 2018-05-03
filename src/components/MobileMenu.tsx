import * as React from 'react';
import * as AppContext from '../contexts/AppContext';
import Button from './Button';
import IconButton from './IconButton';
import Overlay from './Overlay';
import SearchInput from './SearchInput';

class MobileMenu extends React.Component {
  public render() {
    return (
      <AppContext.Consumer>
        {ctx => (
          <>
            <Overlay dataTestID="menu-overlay" onClick={ctx.hideMobileMenu} />
            <div className="MobileMenu">
              <div className="MobileMenu__top">
                <IconButton
                  dataTestID="hide-menu"
                  onClick={ctx.hideMobileMenu}
                  theme="secondary"
                  type="text"
                >
                  <IconButton.Icon icon="arrow-left" prefix="solid" />
                </IconButton>
              </div>
              <div className="MobileMenu__links">
                <SearchInput onSubmit={ctx.hideMobileMenu} />
              </div>
              {ctx.currentUser ? (
                <div />
              ) : (
                <div className="MobileMenu__auth-buttons">
                  <Button
                    dataTestID="sign-in-btn"
                    onClick={() => {
                      ctx.hideMobileMenu();
                      ctx.showAuthModal();
                    }}
                    fullWidth
                    type="outline"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      ctx.hideMobileMenu();
                      ctx.showAuthModal();
                    }}
                    dataTestID="sign-up-btn"
                    fullWidth
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default MobileMenu;
