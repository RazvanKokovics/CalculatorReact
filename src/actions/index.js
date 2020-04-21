import * as constants from 'constants/actionTypes.js';

export function setExtended() {
  return {
    type: constants.SET_EXTENDED,
  };
}

export function handleExpressionClick(expression) {
  return {
    type: constants.SET_EXPRESSION,
    expressionValue: expression,
  };
}

export function logout() {
  return {
    type: constants.LOGOUT,
  };
}

export function logIn(userName, password) {
  const data = {
    userName,
    password,
  };
  return {
    type: constants.LOGIN,
    data,
  };
}

export function removeExpression(id) {
  const data = {
    id,
  };

  return {
    type: constants.REMOVE_EXPRESSION,
    data,
  };
}

export function getExpressions() {
  return {
    type: constants.FETCH_EXPRESSIONS,
  };
}

export function addExpression(expression) {
  const data = {
    value: expression,
  };

  return {
    type: constants.UPDATE_EXPRESSION,
    data,
  };
}

export function setDisplay(buttonName) {
  return {
    type: constants.SET_DISPLAY,
    buttonName,
  };
}

export function register(userData) {
  const data = {
    userName: userData.username,
    password: userData.password,
    firstName: userData.firstname,
    lastName: userData.lastname,
    email: userData.email,
  };

  return { type: constants.REGISTER, data };
}

export function loginSuccess(jwt, username) {
  return {
    type: constants.LOGIN_SUCCESS,
    user: { username },
    jwt,
  };
}

export function loginFailure(error) {
  return { type: constants.LOGIN_FAILURE, error };
}

export function registerSuccess() {
  return { type: constants.REGISTER_SUCCESS };
}

export function registerFailure(error) {
  return { type: constants.REGISTER_FAILURE, error };
}

export function fetchExpressionsSuccess(expressions) {
  return {
    type: constants.FETCH_EXPRESSIONS_SUCCESS,
    expressions,
  };
}

export function fetchExpressionsFailure(error) {
  return { type: constants.FETCH_EXPRESSIONS_FAILURE, error };
}

export function removeExpressionSuccess(id) {
  return {
    type: constants.REMOVE_EXPRESSION_SUCCESS,
    id,
  };
}

export function removeExpressionFailure(error) {
  return { type: constants.REMOVE_EXPRESSION_FAILURE, error };
}

export function updateExpressionSuccess(id) {
  return {
    type: constants.UPDATE_EXPRESSION_SUCCESS,
    id,
  };
}

export function updateExpressionFailure(error) {
  return { type: constants.UPDATE_EXPRESSION_FAILURE, error };
}

export function handleForm() {
  return {
    type: constants.HANDLE_FORM,
  };
}

export function getEquation() {
  return {
    type: constants.GET_EQUATION,
  };
}

export function getEquationSuccess(equation) {
  return {
    type: constants.GET_EQUATION_SUCCESS,
    equation,
  };
}

export function getEquationFailure(error) {
  return {
    type: constants.GET_EQUATION_FAILURE,
    error,
  };
}

export function solveEquation(equationId, solution) {
  return {
    type: constants.SOLVE_EQUATION,
    data: {
      equationId,
      solution,
    },
  };
}

export function solveEquationSuccess(message) {
  return {
    type: constants.SOLVE_EQUATION_SUCCESS,
    message,
  };
}

export function solveEquationFailure(error) {
  return {
    type: constants.SOLVE_EQUATION_FAILURE,
    error,
  };
}

export function getUserRoleStatistic() {
  return {
    type: constants.GET_USER_ROLE_STATISTIC,
  };
}

export function getUserRoleStatisticSuccess(data) {
  return {
    type: constants.GET_USER_ROLE_STATISTIC_SUCCESS,
    data,
  };
}

export function getUserRoleStatisticFailure(error) {
  return {
    type: constants.GET_USER_ROLE_STATISTIC_FAILURE,
    error,
  };
}

export function getUserExpressionsStatistic() {
  return {
    type: constants.GET_EXPRESSION_STATISTIC,
  };
}

export function getUserExpressionsStatisticSuccess(data) {
  return {
    type: constants.GET_EXPRESSION_STATISTIC_SUCCESS,
    data,
  };
}

export function getUserExpressionsStatisticFailure(error) {
  return {
    type: constants.GET_EXPRESSION_STATISTIC_FAILURE,
    error,
  };
}

export function getExpressionUserStatistic() {
  return {
    type: constants.GET_EXPRESSION_USER_STATISTIC,
  };
}

export function getExpressionUserStatisticSuccess(data) {
  return {
    type: constants.GET_EXPRESSION_USER_STATISTIC_SUCCESS,
    data,
  };
}

export function getExpressionUserStatisticFailure(error) {
  return {
    type: constants.GET_EXPRESSION_USER_STATISTIC_FAILURE,
    error,
  };
}
