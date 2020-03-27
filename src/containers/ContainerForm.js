import { connect } from 'react-redux';

import Form from 'Components/Form';
import { logIn } from 'actions';

const mapStateToProps = (state) => ({
  opened: state.userCredentials.username === '',
});

const mapDispatchToProps = (dispatch) => ({
  buttonHandler: (username, password) => dispatch(logIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
