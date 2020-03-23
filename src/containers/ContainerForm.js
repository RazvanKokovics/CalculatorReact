import { connect } from 'react-redux';
import Form from '../Components/Form';
import {logIn} from "../actions";

const mapStateToProps = (state) => ({
    opened : state.loggedin,
})
  
const mapDispatchToProps = (dispatch) => ({
    formHandler: expression => dispatch(logIn)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form)
