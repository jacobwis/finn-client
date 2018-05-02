import * as React from 'react';
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

const ReadingList: React.StatelessComponent = () => {
  return <ReadingListEmpty />;
};

export default ReadingList;
