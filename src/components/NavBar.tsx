import * as React from 'react';
import * as AuthModalContext from '../contexts/AuthModalContext';
import Button from './Button';
import IconButton from './IconButton';
import Input from './Input';
import Icon from './Icon';
import MobileMenuToggle from './MobileMenuToggle';

const NavBar: React.StatelessComponent = () => (
  <div className="container">
    <div className="NavBar">
      <div className="NavBar__mobile-content">
        <MobileMenuToggle>
          {mobileMenu => {
            return (
              <IconButton
                dataTestID="menu-toggle"
                onClick={mobileMenu.show}
                theme="secondary"
                type="text"
              >
                <IconButton.Icon icon="bars" prefix="solid" />
              </IconButton>
            );
          }}
        </MobileMenuToggle>
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
              <Button onClick={ctx.show} type="outline">
                Sign In
              </Button>
              <Button onClick={ctx.hide}>Sign Up</Button>
            </div>
          )}
        </AuthModalContext.Consumer>
      </div>
    </div>
  </div>
);

export default NavBar;
