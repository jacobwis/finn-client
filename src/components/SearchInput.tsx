import * as React from 'react';
import Icon from './Icon';
import Input from './Input';
import Navigator from './Navigator';

interface Props {
  onSubmit?: () => void;
}

interface State {
  value: string;
}

class SearchInput extends React.Component<Props, State> {
  public state = {
    value: ''
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState(prevState => ({
      value
    }));
  };

  public clearInput = () => {
    this.setState(() => ({ value: '' }));
  };

  public render() {
    return (
      <Navigator>
        {({ history }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              history.push(`/search?q=${this.state.value}`);
              this.clearInput();
              // tslint:disable-next-line:no-unused-expression
              this.props.onSubmit && this.props.onSubmit();
            }}
          >
            <Input
              iconLeft={() => <Icon icon="search" />}
              onChange={this.onChange}
              value={this.state.value}
              placeholder="Search"
              fullWidth
            />
          </form>
        )}
      </Navigator>
    );
  }
}

export default SearchInput;
