import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
  children: (props: RouteComponentProps<any>) => React.ReactNode;
}

class Navigator extends React.Component<Props> {
  public render() {
    const { history, location, match, children } = this.props;
    return children({ history, location, match });
  }
}

export default withRouter(Navigator);
