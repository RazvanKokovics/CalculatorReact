import { connect } from 'react-redux';
import Display from '../Components/Display';

const mapStateToProps = state => ({
  value : state.calculation.operationString || state.calculation.total || "0",
})
  
export default connect(
  mapStateToProps
)(Display)