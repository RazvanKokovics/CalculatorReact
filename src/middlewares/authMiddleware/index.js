import { LOGOUT, LOGIN_SUCCESS } from 'constants/actionTypes.js';

const authMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem(
        'user',
        JSON.stringify({
          jwt: action.jwt,
          username: action.user.username,
        }),
      );
      next(action);
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('user');
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
