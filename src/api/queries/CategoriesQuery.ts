import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Category } from '../types';

export interface CategoriesQueryResponse {
  categories: Category[];
}

export const CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
    }
  }
`;

export class CategoriesQuery extends Query<CategoriesQueryResponse> {}
