export const loadState = () => {
  try {
    const user = localStorage.getItem('user');

    if (user === null) {
      return undefined;
    }

    const data = JSON.parse(user);

    return { userCredentials: { username: data.username } };
  } catch (err) {
    return undefined;
  }
};

export function getJwt() {
  return JSON.parse(localStorage.getItem('user')).jwt;
}
