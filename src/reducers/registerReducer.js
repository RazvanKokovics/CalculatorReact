import { REGISTER_SUCCESS, REGISTER_FAILURE } from 'constants/actionTypes.js';

const initialRegisterState = false;

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return true;

    case REGISTER_FAILURE:
      return false;

    default:
      return state;
  }
};
