import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import View from './components/View';

const App = () => (
  <div>
    <Route
      path="/"
      exact
      render={() => (
        <View title="Home">
          <h1>Home View</h1>
          <Link to="/about">About</Link>
        </View>
      )}
    />
    <Route
      path="/about"
      render={() => (
        <View title="About">
          <h1>About</h1>
          <Link to="/">Home</Link>
        </View>
      )}
    />
  </div>
);

export default hot(module)(App);
