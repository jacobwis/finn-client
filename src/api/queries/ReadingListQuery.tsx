import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Book } from '../types';
import bookInfo from '../fragments/bookInfo';

export interface ReadingListQueryResponse {
  readingList: Book[];
}

export const READING_LIST_QUERY = gql`
  #graphql
  query ReadingList {
    readingList {
      ...bookInfo
    }
  }
  ${bookInfo}
`;

export class ReadingListQuery extends Query<ReadingListQueryResponse> {}
