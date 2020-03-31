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
import {
  login,
  deleteExpression,
  fetchExpressions,
  insertExpression,
  addUser,
} from 'service/queries';

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
    login(username, password).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}

export function removeExpression(expressionId, jwt) {
  function handleGarbageClick(expressionId) {
    return {
      type: DELETE_EXPRESSION,
      expressionId: expressionId,
    };
  }

  return (dispatch) => {
    deleteExpression(expressionId, jwt).then((expressionId) => {
      dispatch(handleGarbageClick(expressionId));
    });
  };
}

export function getExpressions(jwt) {
  function updateExpressions(expressions) {
    return {
      type: GET_EXPRESSIONS,
      expressions,
    };
  }

  return (dispatch) => {
    fetchExpressions(jwt).then((expressions) => {
      dispatch(updateExpressions(expressions));
    });
  };
}

export function addExpression(expression, jwt) {
  function updateExpressionId(expressionId) {
    return {
      type: UPDATE_EXPRESSION_ID,
      e_id: expressionId,
    };
  }

  return (dispatch) => {
    insertExpression(expression, jwt).then((expressionId) => {
      dispatch(updateExpressionId(expressionId));
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
    addUser(userData).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}
