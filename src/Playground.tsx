import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthModalContext from './contexts/AuthModalContext';
import MainLayout from './components/MainLayout';

interface Props {
  mobileMenuVisible: boolean;
}

class Playground extends React.Component<Props> {
  public render() {
    return <MainLayout />;
  }
}

const mapStateToProps = (state: any) => ({
  mobileMenuVisible: state.mobileMenu.visible
});

export default connect(mapStateToProps)(Playground);
