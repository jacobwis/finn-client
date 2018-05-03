import * as React from 'react';
import * as AppContext from '../contexts/AppContext';
import NavBar from './NavBar';
import AuthModal from './AuthModal';
import MobileMenu from './MobileMenu';

class MainLayout extends React.Component {
  public render() {
    return (
      <>
        <div className="MainLayout">
          <NavBar />
          <div className="MainLayout__content">{this.props.children}</div>
        </div>
        <AppContext.Consumer>
          {ctx => (
            <>
              {ctx.authModalVisible && <AuthModal />}
              {ctx.mobileMenuVisible && <MobileMenu />}
            </>
          )}
        </AppContext.Consumer>
      </>
    );
  }
}

export default MainLayout;
