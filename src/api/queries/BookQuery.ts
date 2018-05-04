import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import bookInfo from '../fragments/bookInfo';
import { Book } from '../types';

export interface BookQueryResponse {
  getBookByID: Book;
}

export interface BookQueryVariables {
  id: string;
}

export const BOOK_QUERY = gql`
  #graphql
  query BookQuery($id: String) {
    getBookByID(id: $id) {
      ...bookInfo
      isOnList
      hasRead
    }
  }
  ${bookInfo}
`;

export class BookQuery extends Query<BookQueryResponse, BookQueryVariables> {}
