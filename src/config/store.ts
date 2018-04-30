import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export const configureStore = (preloadedState?: any) => {
  const composeEnhancers =
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const store = createStore(rootReducer, preloadedState, composeEnhancers());

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
