import { connect } from 'react-redux';
import {setDisplay, setExtended} from '../actions';
import ButtonPanel from '../Components/ButtonPanel';

const mapStateToProps = (state) => ({
    extended : state.extended,
})

const buttonType = (dispatch, buttonName) => {
    if((buttonName === "hide") || (buttonName === "show")){
        dispatch(setExtended());
    }
    else{
        dispatch(setDisplay(buttonName));
    }
}

const mapDispatchToProps = (dispatch) => ({
    clickHandler: buttonName => buttonType(dispatch, buttonName)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonPanel)