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

export function fetchExpressions(jwt) {
  const config = {
    headers: {
      'auth-token': jwt,
    },
  };

  return axios
    .get('http://localhost:3002/api/expressions', config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteExpression(expressionId, jwt) {
  const config = {
    data: {
      e_id: expressionId,
    },
    headers: {
      'auth-token': jwt,
    },
  };

  return axios
    .delete('http://localhost:3002/api/expressions', config)
    .then(() => {
      return expressionId;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function insertExpression(expression, jwt) {
  const config = {
    headers: {
      'auth-token': jwt,
    },
  };

  const body = {
    e_value: expression,
  };
  return axios
    .post('http://localhost:3002/api/expressions', body, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
