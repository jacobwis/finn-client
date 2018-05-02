import * as React from 'react';

interface Props {
  title: string;
}

let title = '';

class View extends React.Component<Props> {
  public static getTitle = () => {
    return title;
  };

  public constructor(props: Props) {
    super(props);
    title = this.props.title;
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.title !== prevProps.title) {
      document.title = this.props.title;
    }
  }

  public render() {
    return this.props.children;
  }
}

export default View;
