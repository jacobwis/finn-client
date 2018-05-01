import * as React from 'react';
import * as AuthModalContext from '../contexts/AuthModalContext';
import * as MobileMenuContext from '../contexts/MobileMenuContext';
import Button from './Button';
import Icon from './Icon';
import IconButton from './IconButton';
import Input from './Input';
import Overlay from './Overlay';

class MobileMenu extends React.Component {
  public render() {
    return (
      <MobileMenuContext.Consumer>
        {({ hide }) => (
          <>
            <Overlay dataTestID="menu-overlay" onClick={hide} />
            <div className="MobileMenu">
              <div className="MobileMenu__top">
                <IconButton dataTestID="hide-menu" onClick={hide} theme="secondary" type="text">
                  <IconButton.Icon icon="arrow-left" prefix="solid" />
                </IconButton>
              </div>
              <div className="MobileMenu__links">
                <Input fullWidth iconLeft={() => <Icon icon="search" />} placeholder="Search" />
              </div>
              <AuthModalContext.Consumer>
                {authModal => (
                  <div className="MobileMenu__auth-buttons">
                    <Button
                      dataTestID="sign-in-btn"
                      onClick={() => {
                        hide();
                        authModal.show();
                      }}
                      fullWidth
                      type="outline"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        hide();
                        authModal.show();
                      }}
                      dataTestID="sign-up-btn"
                      fullWidth
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </AuthModalContext.Consumer>
            </div>
          </>
        )}
      </MobileMenuContext.Consumer>
    );
  }
}

export default MobileMenu;
