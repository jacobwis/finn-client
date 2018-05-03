import * as React from 'react';
import { ApolloClient } from 'apollo-client';
// import { graphql } from 'react-apollo';
import { User } from '../api';

interface Props {
  client?: ApolloClient<any>;
  currentUser?: User;
}

interface State {
  currentUser: User | null;
  mobileMenuVisible: boolean;
  showMobileMenu: () => void;
  hideMobileMenu: () => void;
  authModalVisible: boolean;
  showAuthModal: () => void;
  hideAuthModal: () => void;
}

const Context = React.createContext<State>({
  currentUser: null,
  mobileMenuVisible: false,
  // tslint:disable-next-line:no-empty
  showMobileMenu: () => {},
  // tslint:disable-next-line:no-empty
  hideMobileMenu: () => {},
  authModalVisible: false,
  // tslint:disable-next-line:no-empty
  showAuthModal: () => {},
  // tslint:disable-next-line:no-empty
  hideAuthModal: () => {}
});

export const Consumer = Context.Consumer;

export class Provider extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    if (nextProps.currentUser !== prevState.currentUser) {
      return {
        currentUser: nextProps.currentUser
      };
    }
    return null;
  }

  public showMobileMenu = () => this.setState(prevState => ({ mobileMenuVisible: true }));

  public hideMobileMenu = () => this.setState(prevState => ({ mobileMenuVisible: false }));

  public showAuthModal = () => this.setState(prevState => ({ authModalVisible: true }));

  public hideAuthModal = () => this.setState(prevState => ({ authModalVisible: false }));

  // tslint:disable-next-line:member-ordering
  public state: State = {
    currentUser: null,
    mobileMenuVisible: false,
    showMobileMenu: this.showMobileMenu,
    hideMobileMenu: this.hideMobileMenu,
    authModalVisible: false,
    showAuthModal: this.showAuthModal,
    hideAuthModal: this.hideAuthModal
  };

  public onWidthChange = (mq: MediaQueryList) => {
    if (mq.matches) {
      this.hideMobileMenu();
    }
  };

  public componentDidMount() {
    if (window.matchMedia) {
      const mq = window.matchMedia('(min-width: 840px)');
      mq.addListener(this.onWidthChange);
      this.onWidthChange(mq);
    }
  }

  public render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

// export const Provider = graphql<{}, CurrentUserResponse>(CURRENT_USER_QUERY)(props => {
//   const currentUser = props.data.currentUser;
//   return <App currentUser={currentUser}>{props.children}</App>;
// });
