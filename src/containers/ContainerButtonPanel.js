import { connect } from 'react-redux';
import { setDisplay, setExtended } from '../actions';
import ButtonPanel from '../Components/ButtonPanel';

const mapStateToProps = (state) => ({
  extended: state.extended,
  jwt: state.userCredentials.jwt,
  enabledKeys: state.userCredentials.username === '',
});

const buttonType = (dispatch, buttonName, jwt) => {
  if (buttonName === 'hide' || buttonName === 'show') {
    dispatch(setExtended());
  } else {
    dispatch(setDisplay(buttonName, jwt));
  }
};

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (buttonName, jwt) => buttonType(dispatch, buttonName, jwt),
  keyPressed: (event, jwt) => {
    let keyName;
    if (event.shiftKey && event.key === '+') keyName = '+';
    if (event.shiftKey && event.key === '*') keyName = '*';
    if (event.shiftKey && event.key === '(') keyName = '(';
    if (event.shiftKey && event.key === ')') keyName = ')';
    if (event.key === '/') keyName = '/';
    if (event.key === '-') keyName = '-';
    if (event.keyCode === 13) keyName = '=';
    if ('0123456789='.includes(event.key)) keyName = event.key;
    if ('+*()/-=0123456789='.includes(keyName))
      dispatch(setDisplay(keyName, jwt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);
