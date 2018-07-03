import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
