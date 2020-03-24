import { connect } from 'react-redux';
import Form from '../Components/Form';
import { logIn } from '../actions';
const axios = require('axios').default;

const mapStateToProps = state => ({
  opened: state.userCredentials.username === '',
});

function login(dispatch, username, password) {
  const body = {
    user_name: username,
    password: password,
  };
  axios.post('http://localhost:3002/user/login', body).then(jwt => {
    dispatch(logIn(body, jwt.data));
  });
}

const mapDispatchToProps = dispatch => ({
  buttonHandler: (username, password) => {
    login(dispatch, username, password);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
