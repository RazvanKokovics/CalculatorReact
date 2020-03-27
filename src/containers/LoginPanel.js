import { connect } from 'react-redux';
import LoginPanel from '../Components/LoginPanel';
import { logout } from '../actions';

const mapStateToProps = (state) => ({
  username: state.userCredentials.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
