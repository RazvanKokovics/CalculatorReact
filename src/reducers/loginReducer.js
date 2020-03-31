import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from 'constants/actionTypes.js';

const initialLogInState = {
  username: '',
  jwt: '',
};

export const loginReducer = (state = initialLogInState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;

    case LOGIN_REQUEST:
      return {
        username: '',
        jwt: '',
      };

    case LOGIN_FAILURE:
      return {
        username: '',
        jwt: '',
      };

    case LOGOUT:
      return {
        username: '',
        jwt: '',
      };

    default:
      return state;
  }
};
