import { connect } from 'react-redux';
import {setDisplay} from '../actions';
import ButtonPanel from '../Components/ButtonPanel';

const mapStateToProps = state => ({
    extended : state.extended,
})

const mapDispatchToProps = (dispatch) => ({
    clickHandler: buttonName => dispatch(setDisplay(buttonName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonPanel)