import * as React from 'react';
import { ReadingListQuery, READING_LIST_QUERY } from '../api';
import BookListGrid from './BookListGrid';
import SearchInput from './SearchInput';

const ReadingListEmpty: React.StatelessComponent = () => (
  <div className="ReadingListEmpty">
    <h1 className="ReadingListEmpty__heading">Your reading list is empty</h1>
    <p className="ReadingListEmpty__text">Search for a book below to get started</p>
    <div className="ReadingListEmpty__search">
      <SearchInput />
    </div>
  </div>
);

const ReadingList: React.StatelessComponent = () => (
  <ReadingListQuery query={READING_LIST_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <div />;
      }

      const books = data.readingList;
      if (books.length === 0) {
        return <ReadingListEmpty />;
      }

      return <BookListGrid books={books} />;
    }}
  </ReadingListQuery>
);

export default ReadingList;
