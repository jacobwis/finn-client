import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export const ADD_BOOK_MUTATION = gql`
  #graphql
  mutation AddBook($bookID: String) {
    addBookToReadingList(bookID: $bookID)
  }
`;

export class AddBookMutation extends Mutation {}
