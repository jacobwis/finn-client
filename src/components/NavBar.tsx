import * as React from 'react';
import * as AuthModalContext from '../contexts/AuthModalContext';
import * as MobileMenuContext from '../contexts/MobileMenuContext';
import Button from './Button';
import IconButton from './IconButton';
import Input from './Input';
import Icon from './Icon';

const NavBar: React.StatelessComponent = () => (
  <div className="container">
    <div className="NavBar">
      <div className="NavBar__mobile-content">
        <MobileMenuContext.Consumer>
          {mobileMenu => (
            <IconButton
              type="text"
              theme="secondary"
              dataTestID="menu-toggle"
              onClick={mobileMenu.show}
            >
              <IconButton.Icon icon="bars" prefix="solid" />
            </IconButton>
          )}
        </MobileMenuContext.Consumer>
      </div>
      <div className="NavBar__logo-wrapper">
        <a className="NavBar__logo" href="#">
          Finn
        </a>
      </div>
      <div className="NavBar__desktop-content">
        <Input iconLeft={() => <Icon icon="search" />} placeholder="Search" />
        <AuthModalContext.Consumer>
          {ctx => (
            <div className="NavBar__auth-buttons">
              <Button dataTestID="sign-in-btn" onClick={ctx.show} type="outline">
                Sign In
              </Button>
              <Button dataTestID="sign-up-btn" onClick={ctx.show}>
                Sign Up
              </Button>
            </div>
          )}
        </AuthModalContext.Consumer>
      </div>
    </div>
  </div>
);

export default NavBar;
