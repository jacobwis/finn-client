import * as React from 'react';
import * as MobileMenuContext from '../contexts/MobileMenuContext';
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
        <AuthModal />
      </>
    );
  }
}

export default MainLayout;
