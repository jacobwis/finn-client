import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Playground from './Playground';
import { CURRENT_USER_QUERY, CurrentUserQuery } from './api';
import MainLayout from './components/MainLayout';
import * as AppContext from './contexts/AppContext';
import canUseDOM from './utils/canUseDOM';
// views
import BookView from './views/BookView';
import CategoriesView from './views/CategoriesView';
import CategoryView from './views/CategoryView';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';

class App extends React.Component {
  public componentDidMount() {
    if (canUseDOM()) {
      const hash = window.location.hash;
      if (hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
  }

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
                    <Route
                      path="/categories"
                      render={({ match }) => (
                        <>
                          <Route path={`${match.url}`} exact component={CategoriesView} />
                          <Route path={`${match.url}/:id`} component={CategoryView} />
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
