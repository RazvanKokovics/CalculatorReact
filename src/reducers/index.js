import { combineReducers } from 'redux';

import { calculatorReducer } from './calculationReducer';
import { calculatorExtendedReducer } from './calculatorExtendedReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

export const rootReducer = combineReducers({
  calculation: calculatorReducer,
  extended: calculatorExtendedReducer,
  userCredentials: loginReducer,
  registered: registerReducer,
});
