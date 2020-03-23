import { connect } from 'react-redux';
import ExpressionsPanel from '../Components/ExpressionsPanel';
import {handleExpressionClick, handleGarbageClick} from '../actions';

const mapStateToProps = state => ({
  expressions : state.calculation.expressions,
})

const mapDispatchToProps = dispatch => ({
  clickHandler: expression => dispatch(handleExpressionClick(expression)),
  garbageHandler: expressionId => dispatch(handleGarbageClick(expressionId))
})
  
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpressionsPanel)