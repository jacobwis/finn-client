import * as React from 'react';
import { CurrentUserQuery, CURRENT_USER_QUERY } from '../api';
import AuthPrompt from '../components/AuthPrompt';
import ReadingList from '../components/ReadingList';
import View from '../components/View';

class HomeView extends React.Component {
  public render() {
    return (
      <View title="Finn">
        <div className="container">
          <CurrentUserQuery query={CURRENT_USER_QUERY}>
            {({ data, loading }) => {
              if (loading) {
                return null;
              }

              const { currentUser } = data;
              if (currentUser) {
                return <ReadingList />;
              }
              return <AuthPrompt />;
            }}
          </CurrentUserQuery>
        </div>
      </View>
    );
  }
}

export default HomeView;
