import { connect } from 'react-redux';
import React, { Component } from 'react';
import ExpressionsPanel from '../Components/ExpressionsPanel';
import { handleExpressionClick, getExpressions } from '../actions';
import { fetchExpressions, deleteExpression } from '../service/queries';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  expressions: state.calculation.expressions,
  jwt: state.userCredentials.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),
  garbageHandler: (expressionId, jwt) =>
    deleteExpression(dispatch, expressionId, jwt),
  getExpressions: (jwt) => {
    if (jwt) fetchExpressions(dispatch, jwt);
    else dispatch(getExpressions([]));
  },
});

class ContainerExpressionsPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    garbageHandler: PropTypes.func,
    expressions: PropTypes.array,
    jwt: PropTypes.string,
    getExpressions: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.jwt) this.props.getExpressions(this.props.jwt);
  }

  componentDidUpdate(prevProps) {
    const { jwt } = this.props;
    if (prevProps.jwt !== jwt) {
      this.props.getExpressions(jwt);
    }
  }

  garbage = (expressionId) => {
    this.props.garbageHandler(expressionId, this.props.jwt);
  };

  render() {
    return (
      <ExpressionsPanel
        expressions={this.props.expressions}
        clickHandler={this.props.clickHandler}
        garbageHandler={this.garbage}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);
