import calculate from '../service/calculate';
import {
  SET_DISPLAY,
  SET_EXPRESSION,
  DELETE_EXPRESSION,
  GET_EXPRESSIONS,
} from 'constants/actionTypes.js';

const initialCalculatorState = {
  total: null,
  result: false,
  history: 'History: ',
  operationString: '',
  expressions: [
    { e_id: 0, e_value: '5+3' },
    { e_id: 1, e_value: '12*6' },
    { e_id: 2, e_value: '90/3*4' },
  ],
  expressionsCounter: 3,
};

export const calculatorReducer = (state = initialCalculatorState, action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return calculate(state, action.buttonName);

    case SET_EXPRESSION:
      return {
        ...state,
        operationString: action.expressionValue,
      };

    case DELETE_EXPRESSION:
      return {
        ...state,
        expressions: state.expressions.filter(
          (expression) => expression.id !== action.expressionId,
        ),
      };
    case GET_EXPRESSIONS:
      return {
        ...state,
        expressions: action.expressions,
        expressionsCounter: action.expressions.length,
      };

    default:
      return state;
  }
};
