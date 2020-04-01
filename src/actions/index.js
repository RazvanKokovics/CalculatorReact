import {
  SET_EXPRESSION,
  SET_EXTENDED,
  SET_DISPLAY,
  REMOVE_EXPRESSION,
  LOGIN,
  LOGOUT,
  FETCH_EXPRESSIONS,
  UPDATE_EXPRESSION,
  REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_EXPRESSIONS_FAILURE,
  FETCH_EXPRESSIONS_SUCCESS,
  REMOVE_EXPRESSION_FAILURE,
  REMOVE_EXPRESSION_SUCCESS,
  UPDATE_EXPRESSION_FAILURE,
  UPDATE_EXPRESSION_SUCCESS,
} from 'constants/actionTypes.js';

export function setExtended() {
  return {
    type: SET_EXTENDED,
  };
}

export function handleExpressionClick(expression) {
  return {
    type: SET_EXPRESSION,
    expressionValue: expression,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logIn(username, password) {
  const data = {
    user_name: username,
    password,
  };
  return {
    type: LOGIN,
    data,
  };
}

export function removeExpression(expressionId) {
  const data = {
    e_id: expressionId,
  };

  return {
    type: REMOVE_EXPRESSION,
    data,
  };
}

export function getExpressions() {
  return {
    type: FETCH_EXPRESSIONS,
  };
}

export function addExpression(expression) {
  const data = {
    e_value: expression,
  };

  return {
    type: UPDATE_EXPRESSION,
    data,
  };
}

export function setDisplay(buttonName) {
  return {
    type: SET_DISPLAY,
    buttonName,
  };
}

export function register(userData) {
  const data = {
    user_name: userData.username,
    password: userData.password,
    first_name: userData.firstname,
    last_name: userData.lastname,
    e_mail: userData.email,
  };
  return { type: REGISTER, data };
}

export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    user: { username },
  };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

export function registerSuccess() {
  return { type: REGISTER_SUCCESS };
}

export function registerFailure(error) {
  return { type: REGISTER_FAILURE, error };
}

export function fetchExpressionsSuccess(expressions) {
  return {
    type: FETCH_EXPRESSIONS_SUCCESS,
    expressions,
  };
}

export function fetchExpressionsFailure(error) {
  return { type: FETCH_EXPRESSIONS_FAILURE, error };
}

export function removeExpressionSuccess(expressionId) {
  return {
    type: REMOVE_EXPRESSION_SUCCESS,
    expressionId,
  };
}

export function removeExpressionFailure(error) {
  return { type: REMOVE_EXPRESSION_FAILURE, error };
}

export function updateExpressionSuccess(e_id) {
  return {
    type: UPDATE_EXPRESSION_SUCCESS,
    e_id,
  };
}

export function updateExpressionFailure(error) {
  return { type: UPDATE_EXPRESSION_FAILURE, error };
}
