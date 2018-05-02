import gql from 'graphql-tag';

export default gql`
  fragment bookCovers on Book {
    covers {
      thumbnail
      small
      medium
      large
      smallThumbnail
      extraLarge
    }
  }
`;
