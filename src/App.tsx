import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Route
      path="/"
      exact
      render={() => (
        <div>
          <h1>Home</h1>
          <Link to="/about">About</Link>
        </div>
      )}
    />
    <Route
      path="/about"
      render={() => (
        <div>
          <h1>About</h1>
          <Link to="/">Home</Link>
        </div>
      )}
    />
  </div>
);

export default hot(module)(App);
