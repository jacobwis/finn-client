import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../api';
import LoadingView from './LoadingView';

interface Props {
  books: Book[];
  onHover?: (book: Book) => void;
  loading?: boolean;
}

interface State {
  books: Book[];
  loading: boolean;
}

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

class BookListGrid extends React.Component<Props, State> {
  public static getDerivedStateFromProps(nextProps: Props, prevState: State): any {
    if (nextProps.loading && !prevState.loading) {
      return {
        loading: true
      };
    }

    return null;
  }
  public state: State = {
    loading: true,
    books: []
  };

  public componentDidMount() {
    if (this.props.books) {
      preloadCovers(this.props.books).then(() => {
        this.setState({
          books: this.props.books,
          loading: false
        });
      });
    }
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.books !== prevState.books) {
      const newBooks = this.props.books.filter(bookFromProps => {
        return prevState.books.find(bookFromState => bookFromState.id === bookFromProps.id)
          ? false
          : true;
      });

      if (newBooks.length > 0) {
        preloadCovers(newBooks).then(() => {
          this.setState({ books: this.props.books, loading: false });
        });
      } else {
        this.setState({ books: this.props.books, loading: false });
      }
    }
  }

  public render() {
    const { books } = this.state;

    if (this.state.loading) {
      return <LoadingView />;
    }

    return (
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
                <div
                  onMouseOver={() => this.props.onHover && this.props.onHover(book)}
                  className="BookListGrid__item"
                >
                  <div className="BookListGrid__cover">
                    <img src={cover} />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    );
  }
}

export default BookListGrid;
