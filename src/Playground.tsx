import * as React from 'react';
import Button from './components/Button';
import IconButton from './components/IconButton';

class Playground extends React.Component {
  public render() {
    return (
      <div className="container">
        <div style={{ padding: '8px' }}>
          <IconButton type="solid" icon="bars" />
          <div style={{ display: 'inline-block', width: '10px' }} />
          <IconButton type="outline" icon="bars" />
          <div style={{ display: 'inline-block', width: '10px' }} />
          <IconButton type="text" icon="bars" />
        </div>
        <div style={{ padding: '8px' }}>
          <IconButton theme="secondary" type="solid" icon="bars" />
          <div style={{ display: 'inline-block', width: '10px' }} />
          <IconButton theme="secondary" type="outline" icon="bars" />
          <div style={{ display: 'inline-block', width: '10px' }} />
          <IconButton theme="secondary" type="text" icon="bars" />
        </div>
      </div>
    );
  }
}

export default Playground;
