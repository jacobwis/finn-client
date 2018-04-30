import * as React from 'react';
import Box from './components/Box';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Portal from './components/Portal';
import { Link } from 'react-router-dom';

class Playground extends React.Component {
  public render() {
    return (
      <>
        <NavBar />
        <MobileMenu />
        <Link to="/">Home</Link>
        <Portal>
          <h1>I am a child node</h1>
        </Portal>
      </>
    );
  }
}

export default Playground;
