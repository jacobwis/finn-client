import * as React from 'react';
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
              <div className="MobileMenu__auth-buttons">
                <Button fullWidth type="outline">
                  Sign In
                </Button>
                <Button fullWidth>Sign Up</Button>
              </div>
            </div>
          </>
        )}
      </MobileMenuContext.Consumer>
    );
  }
}

export default MobileMenu;
