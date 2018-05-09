import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Category } from '../types';

export interface CategoryQueryResponse {
  category: Category;
}

export interface CategoryQueryVariables {
  id: string;
}

export const CATEGORY_QUERY = gql`
  query CategoryQuery($id: String) {
    category(id: $id) {
      id
      name
    }
  }
`;

export class CategoryQuery extends Query<CategoryQueryResponse, CategoryQueryVariables> {}
