import * as React from 'react';
import Box from './components/Box';

class Playground extends React.Component {
  public render() {
    return (
      <div className="container">
        <div style={{ padding: '16px 0' }}>
          <Box display="none" mdDisplay="block">
            <h1>Hello!</h1>
            <div>
              <button>Click Me</button>
            </div>
          </Box>
        </div>
      </div>
    );
  }
}

export default Playground;
