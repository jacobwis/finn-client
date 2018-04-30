import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Portal extends React.Component {
  public el: HTMLDivElement;

  public constructor(props: {}) {
    super(props);
    if (typeof document !== 'undefined') {
      this.el = document.createElement('div');
    }
  }

  public componentDidMount() {
    if (typeof document !== 'undefined') {
      document.body.appendChild(this.el);
    }
  }

  public componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  public render() {
    if (this.el) {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
    return null;
  }
}

export default Portal;
