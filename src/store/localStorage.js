export const loadState = () => {
  try {
    const user = localStorage.getItem('user');
    const data = JSON.parse(user);

    if (user === null) {
      return undefined;
    }
    return {
      userCredentials: data,
    };
  } catch (err) {
    return undefined;
  }
};
