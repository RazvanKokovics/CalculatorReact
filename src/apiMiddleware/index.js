import {
  DELETE_EXPRESSION,
  LOGIN_REQUEST,
  GET_EXPRESSIONS,
  UPDATE_EXPRESSION_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  FETCH_EXPRESSIONS,
  REMOVE_EXPRESSION,
  UPDATE_EXPRESSION,
  LOGOUT,
} from 'constants/actionTypes.js';
import { query } from 'apiMiddleware/query';
import { LOGIN_URL, EXPRESSIONS_URL, REGISTER_URL } from 'apiMiddleware/config';
import { getJwt } from 'store/localStorage';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      next(action);

      query('post', LOGIN_URL, action.data).then(
        (response) => {
          const jwt = response.data;

          localStorage.setItem(
            'user',
            JSON.stringify({ jwt, username: action.data.user_name }),
          );
          store.dispatch({
            type: LOGIN_SUCCESS,
            user: { username: action.data.user_name },
          });
        },
        (error) => {
          store.dispatch({ type: LOGIN_FAILURE, error: error.toString() });
        },
      );
      break;

    case REGISTER_REQUEST:
      next(action);

      query('post', REGISTER_URL, action.data).then(
        store.dispatch({ type: REGISTER_SUCCESS }),
        (error) => {
          store.dispatch({ type: REGISTER_FAILURE, error });
        },
      );
      break;

    case FETCH_EXPRESSIONS:
      next(action);

      query('get', EXPRESSIONS_URL, '', getJwt()).then((response) => {
        store.dispatch({
          type: GET_EXPRESSIONS,
          expressions: response.data,
        });
      });
      break;

    case REMOVE_EXPRESSION:
      next(action);

      query('delete', EXPRESSIONS_URL, action.data, getJwt()).then(() => {
        store.dispatch({
          type: DELETE_EXPRESSION,
          expressionId: action.data.e_id,
        });
      });
      break;

    case UPDATE_EXPRESSION:
      next(action);

      query('post', EXPRESSIONS_URL, action.data, getJwt()).then((response) => {
        store.dispatch({
          type: UPDATE_EXPRESSION_ID,
          e_id: response.data,
        });
      });
      break;

    case LOGOUT:
      next(action);
      localStorage.removeItem('user');
      break;

    default:
      next(action);
  }
};

export default apiMiddleware;
