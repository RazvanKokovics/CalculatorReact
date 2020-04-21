import {
  GET_EQUATION_SUCCESS,
  SOLVE_EQUATION_SUCCESS,
  GET_EQUATION_FAILURE,
} from 'constants/actionTypes.js';

const initialEquationState = {
  equation: '',
  equationId: '',
  message: '',
};

export const equationReducer = (state = initialEquationState, action) => {
  switch (action.type) {
    case GET_EQUATION_SUCCESS:
      return {
        equation: action.equation.value,
        equationId: action.equation.id,
        message: '',
      };

    case GET_EQUATION_FAILURE:
      return {
        ...initialEquationState,
        message: action.error,
      };

    case SOLVE_EQUATION_SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};
