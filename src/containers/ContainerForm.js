import { connect } from 'react-redux';
import Form from '../Components/Form';
import { login } from '../service/queries';

const mapStateToProps = (state) => ({
  opened: state.userCredentials.username === '',
});

const mapDispatchToProps = (dispatch) => ({
  buttonHandler: (username, password) => {
    login(dispatch, username, password);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
