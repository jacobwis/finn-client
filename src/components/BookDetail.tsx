import * as React from 'react';
import { Book } from '../api';
import * as AppContext from '../contexts/AppContext';
import BookDropdown from './BookDropdown';
import Button from './Button';
import LoadingView from './LoadingView';

interface Props {
  book: Book;
}

interface State {
  ready: boolean;
  removeBookModalVisible: boolean;
}

class BookDetail extends React.Component<Props, State> {
  public state = {
    ready: false,
    removeBookModalVisible: false
  };

  public showRemoveBookModal = () => {
    window.scrollTo(0, 0);
    document.body.classList.add('modal-open');
    this.setState(prevState => ({
      removeBookModalVisible: true
    }));
  };

  public hideRemoveBookModal = () => {
    document.body.classList.remove('modal-open');
    this.setState(prevState => ({
      removeBookModalVisible: false
    }));
  };

  public componentDidMount() {
    const book = this.props.book;
    const covers = book.covers;
    const cover =
      covers.large || covers.medium || covers.small || covers.thumbnail || covers.smallThumbnail;
    const el = document.createElement('img');
    el.src = cover;
    el.addEventListener('load', () => this.setState({ ready: true }), { once: true });
  }

  public render() {
    const book = this.props.book;
    const covers = book.covers;
    const cover =
      covers.large || covers.medium || covers.small || covers.thumbnail || covers.smallThumbnail;

    if (!this.state.ready) {
      return <LoadingView />;
    }

    return (
      <div className="BookDetail">
        <div className="BookDetail__title-area">
          <h1 className="BookDetail__title">{book.title}</h1>
          <p className="BookDetail__authors">{book.authors.join(', ')}</p>
        </div>
        <div className="BookDetail__cover-area ">
          <div className="BookDetail__cover">
            <img src={cover} />
          </div>
          <AppContext.Consumer>
            {({ currentUser, showAuthModal }) => {
              if (currentUser) {
                return <BookDropdown book={book} />;
              }

              return (
                <Button type="outline" onClick={showAuthModal} fullWidth>
                  Sign In
                </Button>
              );
            }}
          </AppContext.Consumer>
        </div>
        <p
          className="BookDetail__description  BookDetail__description-area"
          dangerouslySetInnerHTML={{ __html: book.description }}
        />
      </div>
    );
  }
}

export default BookDetail;
