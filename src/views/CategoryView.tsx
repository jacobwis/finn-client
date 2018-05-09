import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  BOOKS_BY_CATEGORY_QUERY,
  BooksByCategoryQuery,
  CATEGORY_QUERY,
  CategoryQuery
} from '../api';
import BookListGrid from '../components/BookListGrid';
import InfiniteScroll from '../components/InfiniteScroll';

class CategoryView extends React.Component<RouteComponentProps<{ id: string }>> {
  public render() {
    const id = this.props.match.params.id;
    return (
      <CategoryQuery query={CATEGORY_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) {
            return <div />;
          }

          const category = data.category;
          return (
            <div className="container">
              <h1 className="CategoryView__title">{category.name}</h1>
              <BooksByCategoryQuery
                query={BOOKS_BY_CATEGORY_QUERY}
                variables={{ category: category.id, options: { startIndex: 0 } }}
              >
                {booksByCategoryQuery => {
                  const { booksByCategory } = booksByCategoryQuery.data;
                  const fetchMore = booksByCategoryQuery.fetchMore;
                  return (
                    <InfiniteScroll
                      onEndReached={() => {
                        if (booksByCategory) {
                          fetchMore({
                            variables: {
                              options: {
                                startIndex: booksByCategory.length
                              }
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              const filtered = fetchMoreResult.booksByCategory.filter(book => {
                                return prev.booksByCategory.find(b => b.id === book.id)
                                  ? false
                                  : true;
                              });

                              return {
                                ...prev,
                                booksByCategory: [...prev.booksByCategory, ...filtered]
                              };
                            }
                          });
                        }
                      }}
                    >
                      <BookListGrid books={booksByCategory} />
                    </InfiniteScroll>
                  );
                }}
              </BooksByCategoryQuery>
            </div>
          );
        }}
      </CategoryQuery>
    );
  }
}

export default CategoryView;
