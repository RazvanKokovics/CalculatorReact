import {
  SET_EXPRESSION,
  SET_EXTENDED,
  SET_DISPLAY,
  DELETE_EXPRESSION,
  LOGIN_REQUEST,
  LOGOUT,
  GET_EXPRESSIONS,
  UPDATE_EXPRESSION_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from 'constants/actionTypes.js';
import { login } from 'service/queries';

export function setDisplay(buttonName) {
  return {
    type: SET_DISPLAY,
    buttonName,
  };
}

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

export function handleGarbageClick(expressionId) {
  return {
    type: DELETE_EXPRESSION,
    expressionId: expressionId,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function getExpressions(expressions) {
  return {
    type: GET_EXPRESSIONS,
    expressions,
  };
}

export function updateExpressionId(expressionId) {
  return {
    type: UPDATE_EXPRESSION_ID,
    e_id: expressionId,
  };
}

export function logIn(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    login(username, password).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };

  function request(user) {
    return { type: LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
}
