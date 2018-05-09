import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../api';

interface Props {
  user: User;
}

interface State {
  isOpen: boolean;
}

class UserDropdown extends React.Component<Props, State> {
  public state = {
    isOpen: false
  };

  public showMenu = () => {
    this.setState(
      prevState => ({
        isOpen: true
      }),
      () => {
        document.addEventListener('click', this.hideMenu, { once: true });
      }
    );
  };

  public hideMenu = () => {
    this.setState(prevState => ({
      isOpen: false
    }));
  };

  public render() {
    const { user } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="UserDropdown">
        <button className="UserDropdown__button" onClick={this.showMenu}>
          <img className="UserDropdown__image" src={user.photoURL} />
          <div className="UserDropdown__details">
            <p className="UserDropdown__name">{user.name}</p>
            {user.username && <p className="UserDropdown__username">@{user.username}</p>}
          </div>
        </button>
        {isOpen && (
          <div className="UserDropdown__menu">
            <Link className="UserDropdown__item" to="/">
              Reading List
            </Link>
            <Link className="UserDropdown__item" to="/categories">
              Browse
            </Link>
            <a className="UserDropdown__item" href="#">
              About
            </a>
            <a className="UserDropdown__item" href="/auth/logout">
              Sign Out
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default UserDropdown;
