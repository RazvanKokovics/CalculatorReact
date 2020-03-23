import { SET_EXTENDED } from "constants/actionTypes";

const initialCalculatorExtendedState = false;

export const calculatorExtendedReducer = (state = initialCalculatorExtendedState, action) => {
  switch (action.type) {
    
    case SET_EXTENDED:
      return !state;
    
    default:
		  return state;
  }
}
