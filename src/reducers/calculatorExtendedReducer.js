import { SET_EXTENDED } from 'constants/actionTypes';

const initialExtendedState = false;

export const calculatorExtendedReducer = (
  state = initialExtendedState,
  action,
) => {
  switch (action.type) {
    case SET_EXTENDED:
      return !state;

    default:
      return state;
  }
};
