import * as React from 'react';
import Button from './components/Button';

class Playground extends React.Component {
  public render() {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}
      >
        <Button style={{ marginRight: '8px' }} type="solid" theme="primary">
          Primary Button
        </Button>
        <Button style={{ marginRight: '8px' }} type="outline" theme="primary">
          Primary Button
        </Button>
        <Button style={{ marginRight: '8px' }} type="text" theme="primary">
          Primary Button
        </Button>
      </div>
    );
  }
}

export default Playground;
