import gql from 'graphql-tag';
import bookCovers from './bookCovers';

export default gql`
  fragment bookInfo on Book {
    id
    title
    authors
    description
    ...bookCovers
  }
  ${bookCovers}
`;
