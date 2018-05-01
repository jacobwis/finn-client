import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { User } from '../types';

export interface CurrentUserResponse {
  currentUser: User;
}

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      name
      username
      photoURL
    }
  }
`;

export class CurrentUserQuery extends Query<CurrentUserResponse> {}
