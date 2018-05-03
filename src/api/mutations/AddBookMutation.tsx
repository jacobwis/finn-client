import * as React from 'react';
import { Mutation as ApolloMutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  BOOK_QUERY,
  BookQueryResponse,
  READING_LIST_QUERY,
  ReadingListQueryResponse
} from '../index';

export const ADD_BOOK_MUTATION = gql`
  #graphql
  mutation AddBook($bookID: String, $hasRead: Boolean) {
    addBookToReadingList(bookID: $bookID, hasRead: $hasRead)
  }
`;

class Mutation extends ApolloMutation {}

interface Props {
  children: (addBook: (id: string, hasRead?: boolean) => void) => React.ReactNode;
}

// tslint:disable-next-line:max-classes-per-file
export class AddBookMutation extends React.Component<Props> {
  public render() {
    return (
      <Mutation mutation={ADD_BOOK_MUTATION}>
        {addBook => {
          return this.props.children((id, hasRead = false) => {
            addBook({
              variables: { bookID: id, hasRead },
              update: proxy => {
                const prevData = proxy.readQuery<BookQueryResponse>({
                  query: BOOK_QUERY,
                  variables: { id }
                });

                const newBook = {
                  ...prevData.getBookByID,
                  isOnList: true,
                  hasRead
                };

                proxy.writeQuery({
                  query: BOOK_QUERY,
                  variables: { id },
                  data: {
                    ...prevData,
                    getBookByID: newBook
                  }
                });

                try {
                  const prevReadingList = proxy.readQuery<ReadingListQueryResponse>({
                    query: READING_LIST_QUERY
                  });

                  if (prevReadingList.readingList.findIndex(b => b.id === id) < 0) {
                    proxy.writeQuery({
                      query: READING_LIST_QUERY,
                      data: {
                        ...prevReadingList,
                        readingList: [...prevReadingList.readingList, newBook]
                      }
                    });
                  }
                  // tslint:disable-next-line:no-empty
                } catch (e) {}
              }
            });
          });
        }}
      </Mutation>
    );
  }
}
