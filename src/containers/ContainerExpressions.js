import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpressionsPanel from 'Components/ExpressionsPanel';
import { handleExpressionClick, getExpressions } from 'actions';
import {
  fetchExpressions,
  deleteExpression,
  insertExpression,
} from 'service/queries';

class ContainerExpressionsPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    garbageHandler: PropTypes.func,
    expressions: PropTypes.array,
    jwt: PropTypes.string,
    getExpressions: PropTypes.func,
    addExpression: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.jwt) this.props.getExpressions(this.props.jwt);
  }

  componentDidUpdate(prevProps) {
    const { jwt } = this.props;
    if (prevProps.jwt !== jwt) {
      this.props.getExpressions(jwt);
    }
    const { expressions } = this.props;
    if (prevProps.expressions.length + 1 === expressions.length) {
      console.log('add');
      if (expressions.length > 0) {
        this.props.addExpression(
          expressions[expressions.length - 1].e_value,
          jwt,
        );
      }
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

const mapStateToProps = (state) => ({
  expressions: state.calculation.expressions,
  jwt: state.userCredentials.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),

  //need to rewrite
  garbageHandler: (expressionId, jwt) =>
    deleteExpression(dispatch, expressionId, jwt),
  getExpressions: (jwt) => {
    if (jwt) fetchExpressions(dispatch, jwt);
    else dispatch(getExpressions([]));
  },
  addExpression: (expression, jwt) => {
    if (jwt) insertExpression(dispatch, expression, jwt);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);
