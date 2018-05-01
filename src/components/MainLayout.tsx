import * as React from 'react';
import NavBar from './NavBar';

class MainLayout extends React.Component {
  public render() {
    return (
      <div className="MainLayout">
        <NavBar />
        <div className="MainLayout__content">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
