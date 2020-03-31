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
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from 'constants/actionTypes.js';
import { query } from 'service/serviceApi';
import {
  LOGIN_URL,
  EXPRESSIONS_URL,
  REGISTER_URL,
} from 'service/serviceApi/config';
import { getJwt } from 'store/localStorage';

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
  localStorage.removeItem('user');

  return {
    type: LOGOUT,
  };
}

export function logIn(username, password) {
  const data = {
    user_name: username,
    password: password,
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

  return (dispatch) => {
    dispatch(request({ username }));

    return query('post', LOGIN_URL, data).then(
      (response) => {
        const jwt = response.data;

        localStorage.setItem('user', JSON.stringify({ jwt, username }));

        dispatch(success({ username }));
        dispatch(getExpressions());
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}

export function removeExpression(expressionId) {
  const jwt = getJwt();
  const data = {
    e_id: expressionId,
  };

  function handleGarbageClick(expressionId) {
    return {
      type: DELETE_EXPRESSION,
      expressionId: expressionId,
    };
  }

  return (dispatch) => {
    return query('delete', EXPRESSIONS_URL, data, jwt).then(() => {
      dispatch(handleGarbageClick(expressionId));
    });
  };
}

export function getExpressions() {
  const jwt = getJwt();

  function updateExpressions(expressions) {
    return {
      type: GET_EXPRESSIONS,
      expressions,
    };
  }

  return (dispatch) => {
    return query('get', EXPRESSIONS_URL, '', jwt).then((response) => {
      dispatch(updateExpressions(response.data));
    });
  };
}

export function addExpression(expression) {
  const jwt = getJwt();
  const body = {
    e_value: expression,
  };

  function updateExpressionId(expressionId) {
    return {
      type: UPDATE_EXPRESSION_ID,
      e_id: expressionId,
    };
  }

  return (dispatch) => {
    return query('post', EXPRESSIONS_URL, body, jwt).then((response) => {
      dispatch(updateExpressionId(response.data));
    });
  };
}

export function setDisplay(buttonName) {
  return {
    type: SET_DISPLAY,
    buttonName,
  };
}

export function register(userData) {
  const { username } = userData;
  const body = {
    user_name: username,
    password: userData.password,
    first_name: userData.firstname,
    last_name: userData.lastname,
    e_mail: userData.email,
  };

  function request(user) {
    return { type: REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: REGISTER_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ username }));
    return query('post', REGISTER_URL, body).then(
      dispatch(success({ username })),
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}
