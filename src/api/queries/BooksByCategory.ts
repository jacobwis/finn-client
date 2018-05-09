import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import bookInfo from '../fragments/bookInfo';
import { Book } from '../types';

export interface BooksByCategoryQueryResponse {
  booksByCategory: Book[];
}

export interface BooksByCategoryQueryVariables {
  category?: string;
  options?: {
    maxResults?: number;
    startIndex?: number;
  };
}

export const BOOKS_BY_CATEGORY_QUERY = gql`
  query BooksByCategory($category: String, $options: BookSearchOptions) {
    booksByCategory(category: $category, options: $options) {
      ...bookInfo
    }
  }
  ${bookInfo}
`;

export class BooksByCategoryQuery extends Query<
  BooksByCategoryQueryResponse,
  BooksByCategoryQueryVariables
> {}
