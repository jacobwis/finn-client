import * as React from 'react';
import { Book, READING_LIST_QUERY, ReadingListQuery } from '../api';
import BookListGrid from './BookListGrid';
import SearchInput from './SearchInput';
import Select from './Select';

function sortBooksByAscendingTitle(books: Book[]) {
  const sorted = books.map(book => book).sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }

    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  return sorted;
}

function sortBooksByDescendingTitle(books: Book[]) {
  const sorted = [...books].sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    if (titleA > titleB) {
      return -1;
    }

    if (titleA < titleB) {
      return 1;
    }

    return 0;
  });

  return sorted;
}

const sortBooks = (books: Book[], sortBy: string) => {
  if (sortBy === 'title-asc') {
    return sortBooksByAscendingTitle(books);
  }

  if (sortBy === 'title-desc') {
    return sortBooksByDescendingTitle(books);
  }

  return books;
};

const filterBooks = (books: Book[], filter: string) => {
  if (filter === 'read') {
    return [...books].filter(book => book.hasRead);
  }

  if (filter === 'unread') {
    return [...books].filter(book => !book.hasRead);
  }

  return books;
};

const ReadingListEmpty: React.StatelessComponent = () => (
  <div className="ReadingListEmpty">
    <h1 className="ReadingListEmpty__heading">Your reading list is empty</h1>
    <p className="ReadingListEmpty__text">Search for a book below to get started</p>
    <div className="ReadingListEmpty__search">
      <SearchInput />
    </div>
  </div>
);

interface State {
  sortBy: string;
  filterBy: string;
}

class ReadingList extends React.Component<{}, State> {
  public state = {
    sortBy: 'recent',
    filterBy: 'unread'
  };

  public onSortChange = (value: string) => {
    let sortBy = this.state.sortBy;

    if (value === 'By Title (A-Z)') {
      sortBy = 'title-asc';
    }

    if (value === 'By Title (Z-A)') {
      sortBy = 'title-desc';
    }

    if (value === 'Most Recent') {
      sortBy = 'recent';
    }

    this.setState({
      sortBy
    });
  };

  public onFilterChange = (value: string) => {
    let filterBy = this.state.filterBy;

    if (value === 'Unread') {
      filterBy = 'unread';
    }

    if (value === 'Read') {
      filterBy = 'read';
    }

    if (value === 'View All') {
      filterBy = 'all';
    }

    this.setState({ filterBy });
  };

  public render() {
    return (
      <ReadingListQuery query={READING_LIST_QUERY}>
        {({ data, loading }) => {
          if (loading) {
            return <div />;
          }
          let books = data.readingList;

          if (books.length === 0) {
            return <ReadingListEmpty />;
          }

          books = filterBooks(books, this.state.filterBy);
          books = sortBooks(books, this.state.sortBy);

          return (
            <>
              <div className="ReadingList__header-row">
                <h1 className="ReadingList__heading">Your List</h1>
                <div className="ReadingList__header-buttons">
                  <Select
                    options={['Most Recent', 'By Title (A-Z)', 'By Title (Z-A)']}
                    onChange={this.onSortChange}
                  />
                  <Select options={['Unread', 'Read', 'View All']} onChange={this.onFilterChange} />
                </div>
              </div>
              <BookListGrid books={books} loading={loading} />
            </>
          );
        }}
      </ReadingListQuery>
    );
  }
}

export default ReadingList;
