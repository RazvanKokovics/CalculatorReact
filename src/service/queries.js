import {
  getExpressions,
  handleGarbageClick,
  updateExpressionId,
} from '../actions';

const axios = require('axios').default;

export function login(username, password) {
  const body = {
    user_name: username,
    password: password,
  };
  return axios
    .post('http://localhost:3002/user/login', body)
    .then((response) => {
      return {
        username: username,
        password: password,
        jwt: response.data,
      };
    });
}

export function fetchExpressions(dispatch, jwt) {
  const config = {
    headers: {
      'auth-token': jwt,
    },
  };
  axios
    .get('http://localhost:3002/api/expressions', config)
    .then((response) => {
      dispatch(getExpressions(response.data));
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

export function deleteExpression(dispatch, expressionId, jwt) {
  const config = {
    data: {
      e_id: expressionId,
    },
    headers: {
      'auth-token': jwt,
    },
  };
  axios
    .delete('http://localhost:3002/api/expressions', config)
    .then(() => {
      dispatch(handleGarbageClick(expressionId));
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

export function insertExpression(dispatch, expression, jwt) {
  const config = {
    headers: {
      'auth-token': jwt,
    },
  };
  const body = {
    e_value: expression,
  };
  axios
    .post('http://localhost:3002/api/expressions', body, config)
    .then((response) => {
      dispatch(updateExpressionId(response.data));
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}