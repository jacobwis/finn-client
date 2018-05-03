import * as React from 'react';
import { AddBookMutation, Book, RemoveBookMutation } from '../api';
import Toggle from './Toggle';

interface Props {
  book: Book;
}

class BookDropdown extends React.Component<Props> {
  public listenForClicks = (onClick: () => void) => {
    document.addEventListener('click', onClick, { once: true });
  };
  public render() {
    const { book } = this.props;
    return (
      <Toggle>
        {({ value, setTrue, setFalse }) => {
          let classStr = 'BookDropdown';
          if (value) classStr += ' BookDropdown--open';
          return (
            <div className={classStr}>
              <div className="BookDropdown__buttons">
                {book.isOnList ? (
                  <button className="BookDropdown__main-button BookDropdown__main-button--on-list">
                    {book.hasRead ? 'Have Read' : 'Want to Read'}
                  </button>
                ) : (
                  <AddBookMutation>
                    {addBook => {
                      return (
                        <button
                          className="BookDropdown__main-button"
                          onClick={() => {
                            addBook(book.id);
                          }}
                        >
                          Add to Reading List
                        </button>
                      );
                    }}
                  </AddBookMutation>
                )}
                <button
                  className="BookDropdown__icon-button"
                  onClick={() => {
                    if (!value) {
                      setTrue();
                      this.listenForClicks(setFalse);
                    }
                  }}
                >
                  <span>
                    <i className="fas fa-caret-down" />
                  </span>
                </button>
              </div>
              {value && (
                <div className="BookDropdown__menu">
                  <AddBookMutation>
                    {addBook => (
                      <button
                        className="BookDropdown__item"
                        onClick={() => {
                          addBook(book.id);
                        }}
                      >
                        Want to Read
                      </button>
                    )}
                  </AddBookMutation>
                  <AddBookMutation>
                    {addBook => (
                      <button
                        className="BookDropdown__item"
                        onClick={() => {
                          addBook(book.id, true);
                        }}
                      >
                        Have Read
                      </button>
                    )}
                  </AddBookMutation>
                  {book.isOnList && (
                    <RemoveBookMutation>
                      {removeBook => (
                        <button
                          className="BookDropdown__item BookDropdown__item--remove"
                          onClick={() => removeBook(book.id)}
                        >
                          Remove from List
                        </button>
                      )}
                    </RemoveBookMutation>
                  )}
                </div>
              )}
            </div>
          );
        }}
      </Toggle>
    );
  }
}

export default BookDropdown;
