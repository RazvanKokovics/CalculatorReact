import {
  REGISTER,
  REMOVE_EXPRESSION,
  FETCH_EXPRESSIONS,
  UPDATE_EXPRESSION,
  LOGIN,
} from 'constants/actionTypes.js';
import { query } from 'middlewares/query';
import {
  EXPRESSIONS_URL,
  REGISTER_URL,
  LOGIN_URL,
} from 'middlewares/apiMiddleware/config';
import { getJwt } from 'store/localStorage';
import {
  registerFailure,
  registerSuccess,
  fetchExpressionsSuccess,
  fetchExpressionsFailure,
  removeExpressionSuccess,
  removeExpressionFailure,
  updateExpressionSuccess,
  updateExpressionFailure,
  loginSuccess,
  loginFailure,
} from 'actions';

const apiMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      query('post', LOGIN_URL, action.data).then(
        (response) => {
          const jwt = response.data;
          next(loginSuccess(jwt, action.data.userName));
        },
        (error) => {
          next(loginFailure(error.toString()));
        },
      );
      break;
    }

    case REGISTER: {
      query('post', REGISTER_URL, action.data).then(
        next(registerSuccess()),
        (error) => {
          next(registerFailure(error.toString()));
        },
      );
      break;
    }

    case FETCH_EXPRESSIONS: {
      query('get', EXPRESSIONS_URL, '', getJwt()).then(
        (response) => {
          next(fetchExpressionsSuccess(response.data));
        },
        (error) => {
          next(fetchExpressionsFailure(error.toString()));
        },
      );
      break;
    }

    case REMOVE_EXPRESSION: {
      query('delete', EXPRESSIONS_URL + action.data.id, '', getJwt()).then(
        () => {
          next(removeExpressionSuccess(action.data.id));
        },
        (error) => {
          next(removeExpressionFailure(error.toString()));
        },
      );
      break;
    }

    case UPDATE_EXPRESSION: {
      query('post', EXPRESSIONS_URL, action.data, getJwt()).then(
        (response) => {
          next(updateExpressionSuccess(response.data.expression.id));
        },
        (error) => {
          next(updateExpressionFailure(error.toString()));
        },
      );
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleware;
