import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import canUseDOM from '../utils/canUseDOM';
import { preloadBookData } from '../utils/preload';
import { SearchQuery, SEARCH_QUERY } from '../api';
import BookListGrid from '../components/BookListGrid';
import Heading from '../components/Heading';
import InfiniteScroll from '../components/InfiniteScroll';
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
            <SearchQuery
              variables={{ query: this.state.query, options: { startIndex: 0 } }}
              query={SEARCH_QUERY}
            >
              {({ loading, data, fetchMore, client, ...p }) => {
                const books = data.search;
                return (
                  <InfiniteScroll
                    onEndReached={() => {
                      if (books) {
                        fetchMore({
                          variables: {
                            options: {
                              startIndex: books.length
                            }
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            const filtered = fetchMoreResult.search.filter(book => {
                              return prev.search.find(b => b.id === book.id) ? false : true;
                            });
                            return {
                              ...prev,
                              search: [...prev.search, ...filtered]
                            };
                          }
                        });
                      }
                    }}
                  >
                    <BookListGrid
                      books={books}
                      loading={loading}
                      onHover={book => {
                        preloadBookData(client, book.id);
                      }}
                    />
                  </InfiniteScroll>
                );
              }}
            </SearchQuery>
          )}
        </div>
      </View>
    );
  }
}

export default withRouter(SearchView);
