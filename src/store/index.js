import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from 'reducers';
import { loadState } from 'store/localStorage';
import apiMiddleware from 'middlewares/apiMiddleware';
import authMiddleware from 'middlewares/authMiddleware';

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(
    applyMiddleware(
      authMiddleware,
      apiMiddleware,
      thunkMiddleware,
      loggerMiddleware,
    ),
  ),
);
