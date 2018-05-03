import * as React from 'react';
import { Mutation as ApolloMutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  BOOK_QUERY,
  BookQueryResponse,
  READING_LIST_QUERY,
  ReadingListQueryResponse
} from '../index';

export const REMOVE_BOOK_MUTATION = gql`
  #graphql
  mutation RemoveBook($bookID: String) {
    removeBookFromReadingList(bookID: $bookID)
  }
`;

class Mutation extends ApolloMutation {}

interface Props {
  children: (addBook: (id: string) => void) => React.ReactNode;
}

export const RemoveBookMutation: React.StatelessComponent<Props> = ({ children }) => (
  <Mutation mutation={REMOVE_BOOK_MUTATION}>
    {removeBook =>
      children(id => {
        removeBook({
          variables: { bookID: id },
          update: proxy => {
            const prevData = proxy.readQuery<BookQueryResponse>({
              query: BOOK_QUERY,
              variables: { id }
            });

            const newBook = {
              ...prevData.getBookByID,
              isOnList: false
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

              const i = prevReadingList.readingList.findIndex(b => b.id === id);

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
      })
    }
  </Mutation>
);
