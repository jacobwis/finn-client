import * as React from 'react';
import Menu from './Menu';
import Popover from './Popover';

interface Props {
  options: string[];
  onChange?: (value: string) => void;
  value?: string;
}

interface State {
  menuVisible: boolean;
  value?: string;
}

class Select extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    if (nextProps.value) {
      return {
        value: nextProps.value
      };
    }

    if (!prevState.value && nextProps.options) {
      return {
        value: nextProps.options[0]
      };
    }

    return null;
  }

  public state: State = {
    menuVisible: false
  };

  public showMenu = () => this.setState({ menuVisible: true });

  public hideMenu = () => this.setState({ menuVisible: false });

  public toggleMenu = () => this.setState(prevState => ({ menuVisible: !prevState.menuVisible }));

  public onChange = (value: string) => {
    this.hideMenu();

    // tslint:disable-next-line:no-unused-expression
    this.props.onChange && this.props.onChange(value);

    if (!this.props.value) {
      this.setState(prevState => ({
        value
      }));
    }
  };

  public render() {
    return (
      <div className="Select">
        <button className="Select__button" onClick={this.showMenu}>
          <span>{this.state.value}</span>
          <span className="Select__button-icon">
            <i className="fas fa-caret-down" />
          </span>
        </button>
        {this.state.menuVisible && (
          <Popover onRequestClose={this.hideMenu}>
            <Menu>
              {this.props.options.map((option, i) => (
                <Menu.Button
                  key={`option-${i}`}
                  onClick={() => {
                    this.onChange(option);
                  }}
                >
                  {option}
                </Menu.Button>
              ))}
            </Menu>
          </Popover>
        )}
      </div>
    );
  }
}

export default Select;
