import * as React from 'react';
import Icon from './Icon';
import Input from './Input';
import Navigator from './Navigator';

interface State {
  value: string;
}

class SearchInput extends React.Component<{}, State> {
  public state = {
    value: ''
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState(prevState => ({
      value
    }));
  };

  public render() {
    return (
      <Navigator>
        {({ history }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              history.push(`/search?q=${this.state.value}`);
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
