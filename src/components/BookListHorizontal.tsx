import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../api';

// @ts-ignore
async function preloadCovers(books: Book[]) {
  await Promise.all(
    books.map(book => {
      return new Promise((resolve, reject) => {
        const covers = book.covers;
        const cover = covers.thumbnail || covers.smallThumbnail;
        if (cover) {
          const el = document.createElement('img');
          el.src = cover;
          el.addEventListener('load', () => resolve(), { once: true });
        } else {
          resolve();
        }
      });
    })
  );
}

interface Props {
  books: Book[];
}

interface State {
  loading: boolean;
}

class BookListHorizontal extends React.Component<Props, State> {
  public state = {
    loading: true
  };

  public componentDidMount() {
    if (this.props.books) {
      preloadCovers(this.props.books).then(() => {
        this.setState({
          loading: false
        });
      });
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.books && this.props.books !== prevProps.books) {
      preloadCovers(this.props.books).then(() => {
        this.setState({
          loading: false
        });
      });
    }
  }

  public render() {
    const { books } = this.props;
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="BookListHorizontal__loading">
          <span>
            <i className="fas fa-spin fa-spinner-third" />
          </span>
        </div>
      );
    }

    return (
      <div className="BookListHorizontal">
        {books.map(book => (
          <Link to={`/books/${book.id}`} className="BookListHorizontal__item" key={book.id}>
            <img src={book.covers.thumbnail} />
          </Link>
        ))}
      </div>
    );
  }
}

export default BookListHorizontal;
