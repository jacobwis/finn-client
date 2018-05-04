import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import bookInfo from '../fragments/bookInfo';
import { Book } from '../types';

export interface ReadingListQueryResponse {
  readingList: Book[];
}

export const READING_LIST_QUERY = gql`
  #graphql
  query ReadingList {
    readingList {
      ...bookInfo
      hasRead
    }
  }
  ${bookInfo}
`;

export class ReadingListQuery extends Query<ReadingListQueryResponse> {}
