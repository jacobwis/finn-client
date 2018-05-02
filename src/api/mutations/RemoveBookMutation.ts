import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export const REMOVE_BOOK_MUTATION = gql`
  #graphql
  mutation RemoveBook($bookID: String) {
    removeBookFromReadingList(bookID: $bookID)
  }
`;

export class RemoveBookMutation extends Mutation {}
