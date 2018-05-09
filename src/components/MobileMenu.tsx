import * as React from 'react';
import { Link } from 'react-router-dom';
import * as AppContext from '../contexts/AppContext';
import Button from './Button';
import IconButton from './IconButton';
import Overlay from './Overlay';
import SearchInput from './SearchInput';

class MobileMenu extends React.Component {
  public componentDidMount() {
    const root = document.getElementById('root');
    root && root.classList.add('modal-open');
  }

  public componentWillUnmount() {
    const root = document.getElementById('root');
    root && root.classList.remove('modal-open');
  }

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
                <div className="MobileMenu__search">
                  <SearchInput onSubmit={ctx.hideMobileMenu} />
                </div>
                {ctx.currentUser && (
                  <Link className="MobileMenu__link" onClick={() => ctx.hideMobileMenu()} to="/">
                    Reading List
                  </Link>
                )}
                <Link
                  className="MobileMenu__link"
                  onClick={() => ctx.hideMobileMenu()}
                  to="/categories"
                >
                  Browse
                </Link>
                <a className="MobileMenu__link" href="#">
                  About
                </a>
                <a className="MobileMenu__link" href="/auth/logout">
                  Logout
                </a>
              </div>
              <div className="MobileMenu__bottom">
                {ctx.currentUser ? (
                  <Link to="/" onClick={() => ctx.hideMobileMenu()} className="MobileMenu__user">
                    <img className="MobileMenu__user-image" src={ctx.currentUser.photoURL} />
                    <div className="MobileMenu__user-details">
                      <p className="MobileMenu__user-name">{ctx.currentUser.name}</p>
                      {ctx.currentUser.username && (
                        <p className="MobileMenu__user-username">@{ctx.currentUser.username}</p>
                      )}
                    </div>
                  </Link>
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
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default MobileMenu;
