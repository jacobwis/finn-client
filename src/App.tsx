import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentUserQuery, CURRENT_USER_QUERY } from './api';
import * as AppContext from './contexts/AppContext';
import MainLayout from './components/MainLayout';

// views
import BookView from './views/BookView';
import HomeView from './views/HomeView';
import Playground from './Playground';
import SearchView from './views/SearchView';

class App extends React.Component {
  public render() {
    return (
      <CurrentUserQuery query={CURRENT_USER_QUERY}>
        {({ data }) => (
          <AppContext.Provider currentUser={data.currentUser}>
            <Switch>
              <Route path="/playground" component={Playground} />
              <Route
                render={() => (
                  <MainLayout>
                    <Route path="/" exact component={HomeView} />
                    <Route path="/search" component={SearchView} />
                    <Route
                      path="/books"
                      render={({ match }) => (
                        <>
                          <Route path={`${match.url}/:id`} component={BookView} />
                        </>
                      )}
                    />
                  </MainLayout>
                )}
              />
            </Switch>
          </AppContext.Provider>
        )}
      </CurrentUserQuery>
    );
  }
}

export default hot(module)(App);
