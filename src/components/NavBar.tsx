import * as React from 'react';
import { CurrentUserQuery, CURRENT_USER_QUERY } from '../api';
import * as AuthModalContext from '../contexts/AuthModalContext';
import * as MobileMenuContext from '../contexts/MobileMenuContext';
import Button from './Button';
import IconButton from './IconButton';
import Input from './Input';
import Icon from './Icon';
import {} from 'react-apollo/test-utils';

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
        <CurrentUserQuery query={CURRENT_USER_QUERY}>
          {({ data, loading }) => {
            if (loading) {
              return null;
            }

            const currentUser = data.currentUser;
            if (currentUser) {
              return (
                <div className="NavBar__user">
                  <p>{currentUser.name}</p>
                  <a href="/auth/logout">Sign Out</a>
                </div>
              );
            }
            return (
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
            );
          }}
        </CurrentUserQuery>
      </div>
    </div>
  </div>
);

export default NavBar;
