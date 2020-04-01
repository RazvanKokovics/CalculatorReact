import { calculate } from 'service/calculate';
import {
  SET_DISPLAY,
  SET_EXPRESSION,
  REMOVE_EXPRESSION_SUCCESS,
  REMOVE_EXPRESSION_FAILURE,
  FETCH_EXPRESSIONS_SUCCESS,
  FETCH_EXPRESSIONS_FAILURE,
  UPDATE_EXPRESSION_SUCCESS,
  UPDATE_EXPRESSION_FAILURE,
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

    case REMOVE_EXPRESSION_SUCCESS:
      return {
        ...state,
        expressions: state.expressions.filter(
          (expression) => expression.e_id !== action.expressionId,
        ),
      };

    case REMOVE_EXPRESSION_FAILURE:
      return state;

    case FETCH_EXPRESSIONS_SUCCESS:
      return {
        ...state,
        expressions: action.expressions,
        expressionsCounter: action.expressions.length,
      };

    case FETCH_EXPRESSIONS_FAILURE:
      return {
        ...state,
        expressions: [],
        expressionsCounter: 0,
      };

    case UPDATE_EXPRESSION_SUCCESS:
      return {
        ...state,
        expressions: updateLastExpressionId(state.expressions, action.e_id),
      };

    case UPDATE_EXPRESSION_FAILURE:
      return state;

    default:
      return state;
  }
};

function updateLastExpressionId(expressionArray, expressionId) {
  let expressions = [...expressionArray];
  expressions[expressions.length - 1].e_id = expressionId;
  return expressions;
}
