import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Form from 'Components/Form';
import { logIn } from 'actions';

class ContainerForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonHandler = this.props.buttonHandler;
  }

  static propTypes = {
    opened: PropTypes.bool,
    buttonHandler: PropTypes.func,
  };

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    event.preventDefault();

    this.setState({ submitted: true });

    if (username && password) {
      this.props.buttonHandler(username, password);
    }
  }

  render() {
    const { opened } = this.props;

    return (
      <Form
        opened={opened}
        buttonHandler={this.buttonHandler}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  opened: state.userCredentials.username === '',
});

const mapDispatchToProps = (dispatch) => ({
  buttonHandler: (username, password) => dispatch(logIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerForm);
