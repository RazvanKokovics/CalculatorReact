import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Form from 'Components/Form';
import { logIn, register } from 'actions';

class ContainerForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  static propTypes = {
    opened: PropTypes.bool,
    buttonHandler: PropTypes.func,
    registerButton: PropTypes.func,
  };

  isValidUser(userData) {
    const { firstname, lastname, password, username } = userData;

    return (
      password.length >= 5 &&
      firstname.length >= 3 &&
      lastname.length >= 3 &&
      username.length >= 5
    );
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin(event) {
    const { username, password } = this.state;
    const { buttonHandler } = this.props;

    event.preventDefault();

    if (username && password) {
      buttonHandler(username, password);
      this.setState({ submitted: true });
    }
  }

  handleRegister(event) {
    const { firstname, lastname, password, email, username } = this.state;
    const userData = { firstname, lastname, password, email, username };
    const { registerButton } = this.props;

    event.preventDefault();

    if (this.isValidUser(userData)) {
      registerButton(userData);
    }
  }

  render() {
    const { opened } = this.props;

    return (
      <Form
        opened={opened}
        buttonHandler={this.handleLogin}
        handleChange={this.handleChange}
        handleRegister={this.handleRegister}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  opened: state.userCredentials.username === '',
});

const mapDispatchToProps = (dispatch) => ({
  buttonHandler: (username, password) => dispatch(logIn(username, password)),
  registerButton: (userData) => dispatch(register(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerForm);
