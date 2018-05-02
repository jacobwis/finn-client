import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Book } from '../types';
import bookInfo from '../fragments/bookInfo';

export interface SearchQueryResponse {
  search: Book[];
}

export interface SearchQueryVariables {
  query?: string;
  options?: SearchQueryOptions;
}

export interface SearchQueryOptions {
  startIndex?: number;
  maxResults?: number;
}

export const SEARCH_QUERY = gql`
  query SearchQuery($query: String, $options: BookSearchOptions) {
    search(query: $query, options: $options) {
      ...bookInfo
    }
  }
  ${bookInfo}
`;

export class SearchQuery extends Query<SearchQueryResponse, SearchQueryVariables> {}
