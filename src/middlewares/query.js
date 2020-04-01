const axios = require('axios').default;

export function query(method, endpoint, data, jwt) {
  const headers = jwt ? { 'auth-token': jwt } : {};
  const url = 'http://localhost:3002' + endpoint;

  return axios({
    method,
    url,
    data,
    headers,
  }).then((response) => {
    return response;
  });
}
