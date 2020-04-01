import {
  DELETE_EXPRESSION,
  GET_EXPRESSIONS,
  UPDATE_EXPRESSION_ID,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  FETCH_EXPRESSIONS,
  REMOVE_EXPRESSION,
  UPDATE_EXPRESSION,
} from 'constants/actionTypes.js';
import { query } from 'middlewares/query';
import {
  EXPRESSIONS_URL,
  REGISTER_URL,
} from 'middlewares/apiMiddleware/config';
import { getJwt } from 'store/localStorage';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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

    default:
      next(action);
  }
};

export default apiMiddleware;
