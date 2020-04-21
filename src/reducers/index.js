import { combineReducers } from 'redux';

import { calculatorReducer } from './calculationReducer';
import { calculatorExtendedReducer } from './calculatorExtendedReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { formReducer } from './formReducer';
import { equationReducer } from './equation';

export const rootReducer = combineReducers({
  calculation: calculatorReducer,
  extended: calculatorExtendedReducer,
  userCredentials: loginReducer,
  registered: registerReducer,
  form: formReducer,
  equation: equationReducer,
});
