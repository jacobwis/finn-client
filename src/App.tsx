import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as AuthModalContext from './contexts/AuthModalContext';
import * as MobileMenuContext from './contexts/MobileMenuContext';
import MainLayout from './components/MainLayout';

// views
import BookView from './views/BookView';
import HomeView from './views/HomeView';
import Playground from './Playground';
import SearchView from './views/SearchView';

class App extends React.Component {
  public render() {
    return (
      <>
        <MobileMenuContext.Provider>
          <AuthModalContext.Provider>
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
          </AuthModalContext.Provider>
        </MobileMenuContext.Provider>
      </>
    );
  }
}

export default hot(module)(App);
