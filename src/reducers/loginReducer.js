import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from 'constants/actionTypes.js';

const initialLogInState = {
  username: '',
  password: '',
  jwt: '',
};

export const loginReducer = (state = initialLogInState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;

    case LOGIN_REQUEST:
      return {
        username: '',
        password: '',
        jwt: '',
      };

    case LOGIN_FAILURE:
      return {
        username: '',
        password: '',
        jwt: '',
      };

    case LOGOUT:
      return {
        username: '',
        password: '',
        jwt: '',
      };

    default:
      return state;
  }
};
