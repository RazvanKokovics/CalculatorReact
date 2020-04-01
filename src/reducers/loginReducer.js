import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from 'constants/actionTypes.js';

const initialLogInState = {
  username: '',
};

export const loginReducer = (state = initialLogInState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;

    case LOGIN_FAILURE:
      return initialLogInState;

    case LOGOUT:
      return initialLogInState;

    default:
      return state;
  }
};
