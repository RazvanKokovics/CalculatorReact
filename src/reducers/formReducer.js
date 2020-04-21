import { HANDLE_FORM } from 'constants/actionTypes';

const initialFormState = false;

export const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case HANDLE_FORM:
      return !state;

    default:
      return state;
  }
};
