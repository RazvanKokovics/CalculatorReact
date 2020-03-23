import calculate from "../service/calculate";
import { SET_DISPLAY, SET_EXPRESSION, DELETE_EXPRESSION } from "constants/actionTypes.js"

const initialCalculatorState = {
  total: null,
  result: false,
  history:"History: ",
  operationString:"",
  expressions:[
    {id: 0, string: "5+3"},
    {id: 1, string: "12*6"},
    {id: 2, string: "90/3*4"},
  ],
  expressionsCounter: 3,
}
  
export const calculatorReducer = (state = initialCalculatorState, action) => {   
  switch (action.type) {
    case SET_DISPLAY:
      const calculation = calculate(state, action.buttonName);
        return calculation;
          
    case SET_EXPRESSION:
      return {
        ...state, 
        operationString: action.expressionValue
      }
  
    case DELETE_EXPRESSION:
      let filtered = state.expressions.filter(expression => expression.id !== action.expressionId);
      return {
        ...state, 
        expressions: filtered
      }
  
    default:
      return state;
  }
}