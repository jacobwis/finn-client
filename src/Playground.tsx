import * as React from 'react';
import Button from './components/Button';
import IconButton from './components/IconButton';
import Input from './components/Input';

class Playground extends React.Component {
  public render() {
    return (
      <div className="container">
        {/* <div className="NavBar">
          <div className="display-md-none">
            <IconButton icon="bars" prefix="solid" type="text" theme="secondary" />
          </div>
          <div className="NavBar__logo-wrapper">
            <a className="NavBar__logo" href="#">
              Finn
            </a>
          </div>
          <div className="display-none display-md-flex NavBar__search-wrapper">
            <input type="text" />
          </div>
          <div className="display-none display-md-flex">
            <Button className="NavBar__button" type="outline">
              Sign In
            </Button>
            <Button className="NavBar__button">Sign Up</Button>
          </div>
        </div> */}
        <div style={{ padding: '16px 0' }}>
          {/* <input type="text" placeholder="Search" className="Input" />
          <div style={{ position: 'relative' }}>
            <input type="text" placeholder="Search" className="Input Input--with-icon" />
            <span className="Input__icon">
              <i className="far fa-fw fa-search" />
            </span>
          </div> */}
          <Input />
          <Input />
        </div>
      </div>
    );
  }
}

export default Playground;
