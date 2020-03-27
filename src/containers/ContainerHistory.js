import { connect } from 'react-redux';
import History from '../Components/History';

const mapStateToProps = (state) => ({
  value: state.calculation.history,
});

export default connect(mapStateToProps)(History);
