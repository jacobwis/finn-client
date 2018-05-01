import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route } from 'react-router-dom';
import * as AuthModalContext from './contexts/AuthModalContext';
import * as MobileMenuContext from './contexts/MobileMenuContext';
import Playground from './Playground';
import HomeView from './views/HomeView';

const App = () => (
  <>
    <MobileMenuContext.Provider>
      <AuthModalContext.Provider>
        <Route path="/" exact component={HomeView} />
        <Route path="/playground" component={Playground} />
      </AuthModalContext.Provider>
    </MobileMenuContext.Provider>
  </>
);

export default hot(module)(App);
