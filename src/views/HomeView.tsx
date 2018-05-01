import * as React from 'react';
import { CurrentUserQuery, CURRENT_USER_QUERY } from '../api';
import AuthPrompt from '../components/AuthPrompt';
import MainLayout from '../components/MainLayout';

class HomeView extends React.Component {
  public render() {
    return (
      <MainLayout>
        <CurrentUserQuery query={CURRENT_USER_QUERY}>
          {({ data, loading }) => (
            <div className="container">{!loading && !data.currentUser && <AuthPrompt />}</div>
          )}
        </CurrentUserQuery>
      </MainLayout>
    );
  }
}

export default HomeView;
