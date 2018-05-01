import * as React from 'react';
import { CurrentUserQuery, CURRENT_USER_QUERY } from './api';
import MainLayout from './components/MainLayout';

class Playground extends React.Component {
  public render() {
    return (
      <MainLayout>
        <CurrentUserQuery query={CURRENT_USER_QUERY}>
          {query => {
            if (query.loading) {
              return <div>Loading...</div>;
            }

            const user = query.data.currentUser;
            return user && user.name;
          }}
        </CurrentUserQuery>
      </MainLayout>
    );
  }
}

export default Playground;
