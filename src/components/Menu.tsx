import * as React from 'react';

interface MenuButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MenuButton: React.StatelessComponent<MenuButtonProps> = ({ children, onClick }) => (
  <button className="Menu__item" onClick={onClick}>
    {children}
  </button>
);

export const MenuLink: React.StatelessComponent = ({ children }) => (
  <a href="#" className="Menu__item">
    {children}
  </a>
);

export const MenuItem: React.StatelessComponent = ({ children }) => (
  <p className="Menu__item">{children}</p>
);

class Menu extends React.Component {
  public static Button = MenuButton;
  public static Item = MenuItem;
  public static Link = MenuLink;

  public render() {
    return <div className="Menu">{this.props.children}</div>;
  }
}

export default Menu;
