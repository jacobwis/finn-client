import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from './components/Box';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Portal from './components/Portal';
import AuthPrompt from './components/AuthPrompt';

interface Props {
  mobileMenuVisible: boolean;
}

class Playground extends React.Component<Props> {
  public render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <AuthPrompt />
        </div>
        {this.props.mobileMenuVisible && (
          <Portal>
            <MobileMenu />
          </Portal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  mobileMenuVisible: state.mobileMenu.visible
});

export default connect(mapStateToProps)(Playground);
