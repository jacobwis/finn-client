import * as React from 'react';

interface Props {
  children: (props: State) => React.ReactNode;
  value?: boolean;
}

interface State {
  setFalse: () => void;
  setTrue: () => void;
  toggle: () => void;
  value: boolean;
}

class Toggle extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    if (nextProps.value !== undefined) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  public setFalse = () => this.setState({ value: false });

  public setTrue = () => this.setState({ value: true });

  public toggle = () => this.setState(prevState => ({ value: !prevState.value }));

  // tslint:disable-next-line:member-ordering
  public state = {
    value: false,
    setFalse: this.setFalse,
    setTrue: this.setTrue,
    toggle: this.toggle
  };

  public render() {
    return this.props.children(this.state);
  }
}

export default Toggle;
