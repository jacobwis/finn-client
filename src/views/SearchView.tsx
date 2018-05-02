import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import canUseDOM from '../utils/canUseDOM';
import { SearchQuery, SEARCH_QUERY } from '../api';
import Heading from '../components/Heading';
import View from '../components/View';

interface Props extends RouteComponentProps<any> {
  //
}

interface State {
  query: string;
}

class SearchView extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    const search = nextProps.location.search;
    let params: URLSearchParams;
    if (canUseDOM()) {
      params = new URLSearchParams(search);
    } else {
      const { URLSearchParams } = require('url');
      params = new URLSearchParams(search);
    }

    const query = params.get('q');

    if (query !== prevState.query) {
      return {
        query
      };
    }

    return null;
  }

  public state = {
    query: ''
  };

  public render() {
    return (
      <View title={`${this.state.query} - Finn`}>
        <div className="container">
          <Heading>Search results for '{this.state.query}'</Heading>
          {this.state.query && (
            <SearchQuery variables={{ query: this.state.query }} query={SEARCH_QUERY}>
              {({ loading, data }) => {
                if (loading) {
                  return <p>Loading...</p>;
                }

                const books = data.search;
                return books.map(book => <h1 key={book.id}>{book.title}</h1>);
              }}
            </SearchQuery>
          )}
        </div>
      </View>
    );
  }
}

export default withRouter(SearchView);
