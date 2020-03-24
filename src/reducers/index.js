import { combineReducers } from 'redux';
import { calculatorReducer } from './calculationReducer';
import { calculatorExtendedReducer } from './calculatorExtendedReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({
  calculation: calculatorReducer,
  extended: calculatorExtendedReducer,
  userCredentials: loginReducer,
});
