import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from 'constants/actionTypes.js';

const initialRegisterState = '';

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return true;

    case REGISTER_SUCCESS:
      return action.user.username;

    case REGISTER_FAILURE:
      return false;

    default:
      return state;
  }
};
