import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../api';

interface Props {
  books: Book[];
}

const BookListGrid: React.StatelessComponent<Props> = ({ books }) => (
  <div className="BookListGrid">
    {books
      .filter(book => {
        return book.covers.thumbnail || book.covers.smallThumbnail;
      })
      .map(book => {
        const covers = book.covers;
        const cover = covers.thumbnail || covers.smallThumbnail;
        return (
          <Link key={book.id} to={`/books/${book.id}`}>
            <div className="BookListGrid__item">
              <div className="BookListGrid__cover">
                <img src={cover} />
              </div>
            </div>
          </Link>
        );
      })}
  </div>
);

export default BookListGrid;
