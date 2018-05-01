import * as React from 'react';
import * as MobileMenuContext from '../contexts/MobileMenuContext';
import * as AuthModalContext from '../contexts/AuthModalContext';
import AuthModal from './AuthModal';
import NavBar from './NavBar';
import MobileMenu from '../components/MobileMenu';

class MainLayout extends React.Component {
  public render() {
    return (
      <>
        <div className="MainLayout">
          <NavBar />
          <div className="MainLayout__content">{this.props.children}</div>
        </div>
        <MobileMenuContext.Consumer>
          {mobileMenu => {
            return mobileMenu.visible && <MobileMenu />;
          }}
        </MobileMenuContext.Consumer>
        <AuthModalContext.Consumer>
          {authModal => {
            return authModal.visible && <AuthModal />;
          }}
        </AuthModalContext.Consumer>
      </>
    );
  }
}

export default MainLayout;
