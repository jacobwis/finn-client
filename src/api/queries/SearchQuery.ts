import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Book } from '../types';

export interface SearchQueryResponse {
  search: Book[];
}

export interface SearchQueryVariables {
  query?: string;
}

export const SEARCH_QUERY = gql`
  query SearchQuery($query: String) {
    search(query: $query) {
      id
      title
      subtitle
    }
  }
`;

export class SearchQuery extends Query<SearchQueryResponse, SearchQueryVariables> {}
