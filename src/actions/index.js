import {SET_EXPRESSION, SET_EXTENDED, SET_DISPLAY, DELETE_EXPRESSION, LOGIN} from "constants/actionTypes.js";


export function setDisplay(buttonName) {
  return {
    type: SET_DISPLAY,
    buttonName,
  }
}

export function setExtended() {
  return {
    type: SET_EXTENDED
  }
}

export function handleExpressionClick(expression) {
  return {
    type: SET_EXPRESSION,
    expressionValue: expression
  }
}

export function handleGarbageClick(expressionId) {
  return {
    type: DELETE_EXPRESSION,
    expressionId: expressionId
  }
}

export function logIn(body, jwtToken) {
  const credentials = {
    username: body.user_name,
    password: body.password,
    jwt: jwtToken
  }
  console.log(body);
  return {
    type: LOGIN,
    credentials
  }
}
