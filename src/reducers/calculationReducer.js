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
    { id: 0, value: '5+3' },
    { id: 1, value: '12*6' },
    { id: 2, value: '90/3*4' },
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
          (expression) => expression.id !== action.id,
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
        expressions: updateLastExpressionId(state.expressions, action.id),
      };

    case UPDATE_EXPRESSION_FAILURE:
      return state;

    default:
      return state;
  }
};

function updateLastExpressionId(expressionArray, expressionId) {
  let expressions = [...expressionArray];
  expressions[expressions.length - 1].id = expressionId;

  return expressions;
}
