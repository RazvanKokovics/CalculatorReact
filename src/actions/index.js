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
