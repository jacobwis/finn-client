import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../styles/index.scss';
import { configureStore } from './config/store';
import App from './App';

const preloadedState = (window as any).__PRELOADED_STATE__;

delete (window as any).__PRELOADED_STATE__;

const store = configureStore(preloadedState);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
