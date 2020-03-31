const axios = require('axios').default;

export function query(method, url, data, jwt) {
  const headers = jwt ? { 'auth-token': jwt } : {};

  return axios({
    method,
    url,
    data,
    headers,
  }).then((response) => {
    return response;
  });
}
