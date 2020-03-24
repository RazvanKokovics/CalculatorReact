import { LOGIN, LOGOUT } from 'constants/actionTypes.js';

const initialLogInState = {
  username: '',
  password: '',
  jwt: '',
};

export const loginReducer = (state = initialLogInState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.credentials;

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
