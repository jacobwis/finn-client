import * as React from 'react';

interface State {
  hide: () => void;
  visible: boolean;
  show: () => void;
}

const Context = React.createContext<State>({
  visible: false,
  show: () => null,
  hide: () => null
});

export const Consumer = Context.Consumer;

export class Provider extends React.Component<{}, State> {
  public show = () => {
    this.setState({
      visible: true
    });
  };

  public hide = () => {
    this.setState({
      visible: false
    });
  };

  // tslint:disable-next-line:member-ordering
  public state = {
    hide: this.hide,
    visible: false,
    show: this.show
  };

  public onWidthChange = (mq: MediaQueryList) => {
    if (mq.matches) {
      this.hide();
    }
  };

  public componentDidMount() {
    const mq = window.matchMedia('(min-width: 840px)');
    mq.addListener(this.onWidthChange);
    this.onWidthChange(mq);
  }

  public render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
