import * as React from 'react';
import {
  Book,
  AddBookMutation,
  ADD_BOOK_MUTATION,
  BOOK_QUERY,
  READING_LIST_QUERY,
  ReadingListQueryResponse
} from '../api';
import Button from './Button';
import BookModal from './BookModal';
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
      <>
        <div className="BookDetail">
          <div className="BookDetail__title-area">
            <h1 className="BookDetail__title">{book.title}</h1>
            <p className="BookDetail__authors">{book.authors.join(', ')}</p>
          </div>
          <div className="BookDetail__cover-area ">
            <div className="BookDetail__cover">
              <img src={cover} />
            </div>
            {book.isOnList ? (
              <Button onClick={this.showRemoveBookModal} fullWidth type="text" theme="secondary">
                Remove from List
              </Button>
            ) : (
              <AddBookMutation mutation={ADD_BOOK_MUTATION}>
                {addBook => (
                  <Button
                    className="BookDetail__button"
                    onClick={() => {
                      addBook({
                        variables: { bookID: book.id },
                        update: proxy => {
                          const prevData = proxy.readQuery<any>({
                            query: BOOK_QUERY,
                            variables: { id: book.id }
                          });

                          const newBook = {
                            ...prevData.getBookByID,
                            isOnList: true
                          };

                          proxy.writeQuery({
                            query: BOOK_QUERY,
                            variables: { id: book.id },
                            data: {
                              ...prevData,
                              getBookByID: newBook
                            }
                          });

                          try {
                            const prevReadingList = proxy.readQuery<ReadingListQueryResponse>({
                              query: READING_LIST_QUERY
                            });

                            proxy.writeQuery({
                              query: READING_LIST_QUERY,
                              data: {
                                ...prevReadingList,
                                readingList: [...prevReadingList.readingList, newBook]
                              }
                            });
                            // tslint:disable-next-line:no-empty
                          } catch (e) {}
                        }
                      });
                    }}
                    fullWidth
                  >
                    Add to List
                  </Button>
                )}
              </AddBookMutation>
            )}
          </div>
          <p
            className="BookDetail__description  BookDetail__description-area"
            dangerouslySetInnerHTML={{ __html: book.description }}
          />
        </div>
        {this.state.removeBookModalVisible && (
          <BookModal book={book} onClose={this.hideRemoveBookModal} />
        )}
      </>
    );
  }
}

export default BookDetail;
