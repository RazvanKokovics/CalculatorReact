import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from 'constants/actionTypes.js';
import { query } from 'middlewares/query';
import { LOGIN_URL } from 'middlewares/authMiddleware/config';

const authMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      query('post', LOGIN_URL, action.data).then(
        (response) => {
          const jwt = response.data;

          localStorage.setItem(
            'user',
            JSON.stringify({ jwt, username: action.data.user_name }),
          );
          next({
            type: LOGIN_SUCCESS,
            user: { username: action.data.user_name },
          });
        },
        (error) => {
          next({ type: LOGIN_FAILURE, error: error.toString() });
        },
      );
      break;
    }

    case LOGOUT: {
      next(action);
      localStorage.removeItem('user');
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
