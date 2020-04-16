import { connect } from 'react-redux';

import NavBar from 'Components/Navbar';
import { logout, handleForm } from 'actions';

const mapStateToProps = (state) => ({
  username: state.userCredentials.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: () => dispatch(logout()),
  loginHandler: () => dispatch(handleForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
