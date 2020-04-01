import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REMOVE_EXPRESSION,
  REMOVE_EXPRESSION_SUCCESS,
  REMOVE_EXPRESSION_FAILURE,
  FETCH_EXPRESSIONS,
  FETCH_EXPRESSIONS_SUCCESS,
  FETCH_EXPRESSIONS_FAILURE,
  UPDATE_EXPRESSION,
  UPDATE_EXPRESSION_SUCCESS,
  UPDATE_EXPRESSION_FAILURE,
} from 'constants/actionTypes.js';
import { query } from 'middlewares/query';
import {
  EXPRESSIONS_URL,
  REGISTER_URL,
} from 'middlewares/apiMiddleware/config';
import { getJwt } from 'store/localStorage';

const apiMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      query('post', REGISTER_URL, action.data).then(
        next({ type: REGISTER_SUCCESS }),
        (error) => {
          next({ type: REGISTER_FAILURE, error: error.toString() });
        },
      );
      break;
    }

    case FETCH_EXPRESSIONS: {
      query('get', EXPRESSIONS_URL, '', getJwt()).then(
        (response) => {
          next({
            type: FETCH_EXPRESSIONS_SUCCESS,
            expressions: response.data,
          });
        },
        (error) => {
          next({ type: FETCH_EXPRESSIONS_FAILURE, error: error.toString() });
        },
      );
      break;
    }

    case REMOVE_EXPRESSION: {
      query('delete', EXPRESSIONS_URL, action.data, getJwt()).then(
        () => {
          next({
            type: REMOVE_EXPRESSION_SUCCESS,
            expressionId: action.data.e_id,
          });
        },
        (error) => {
          next({ type: REMOVE_EXPRESSION_FAILURE, error: error.toString() });
        },
      );
      break;
    }

    case UPDATE_EXPRESSION: {
      query('post', EXPRESSIONS_URL, action.data, getJwt()).then(
        (response) => {
          next({
            type: UPDATE_EXPRESSION_SUCCESS,
            e_id: response.data,
          });
        },
        (error) => {
          next({ type: UPDATE_EXPRESSION_FAILURE, error: error.toString() });
        },
      );
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleware;
