import * as React from 'react';
import {
  Book,
  RemoveBookMutation,
  REMOVE_BOOK_MUTATION,
  BOOK_QUERY,
  READING_LIST_QUERY,
  ReadingListQueryResponse
} from '../api';
import Button from './Button';
import Overlay from './Overlay';

interface Props {
  book: Book;
  onClose: () => void;
}

const BookModal: React.StatelessComponent<Props> = ({ book, onClose }) => (
  <>
    <Overlay onClick={onClose} />
    <div className="BookModal">
      <h1 className="BookModal__heading">
        Are you sure you want to remove {book.title} from your reading list?
      </h1>
      <div className="BookModal__buttons">
        <Button onClick={onClose} type="outline" theme="secondary" fullWidth>
          Cancel
        </Button>
        <RemoveBookMutation mutation={REMOVE_BOOK_MUTATION}>
          {removeBook => (
            <Button
              onClick={() => {
                removeBook({
                  variables: { bookID: book.id },
                  update: proxy => {
                    const prevData = proxy.readQuery<any>({
                      query: BOOK_QUERY,
                      variables: { id: book.id }
                    });

                    const newBook = {
                      ...prevData.getBookByID,
                      isOnList: false
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

                      const i = prevReadingList.readingList.findIndex(b => b.id === book.id);

                      proxy.writeQuery({
                        query: READING_LIST_QUERY,
                        data: {
                          ...prevReadingList,
                          readingList: [
                            ...prevReadingList.readingList.slice(0, i),
                            ...prevReadingList.readingList.slice(i + 1)
                          ]
                        }
                      });
                      // tslint:disable-next-line:no-empty
                    } catch (e) {}
                  }
                });
                onClose();
              }}
              theme="danger"
              fullWidth
            >
              Remove
            </Button>
          )}
        </RemoveBookMutation>
      </div>
    </div>
  </>
);

export default BookModal;
