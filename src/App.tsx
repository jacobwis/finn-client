import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import * as AuthModalContext from './contexts/AuthModalContext';
import View from './components/View';
import Playground from './Playground';

const App = () => (
  <>
    <AuthModalContext.Provider>
      <Route
        path="/"
        exact
        render={() => (
          <View title="Home">
            <h1>Home View</h1>
            <Link to="/playground">Playground</Link>
          </View>
        )}
      />
      <Route path="/playground" component={Playground} />
    </AuthModalContext.Provider>
  </>
);

export default hot(module)(App);
