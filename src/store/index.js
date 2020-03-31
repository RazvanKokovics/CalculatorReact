import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from 'reducers';
import { loadState } from 'store/localStorage';
import apiMiddleware from 'apiMiddleware';

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(
    applyMiddleware(apiMiddleware, thunkMiddleware, loggerMiddleware),
  ),
);
