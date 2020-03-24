import { connect } from 'react-redux';
import React, { Component } from 'react';
import ExpressionsPanel from '../Components/ExpressionsPanel';
import {
  handleExpressionClick,
  handleGarbageClick,
  getExpressions,
} from '../actions';
import PropTypes from 'prop-types';
const axios = require('axios').default;

const mapStateToProps = (state) => ({
  expressions: state.calculation.expressions,
  jwt: state.userCredentials.jwt,
});

function fetchExpressions(dispatch, jwt) {
  const config = {
    headers: {
      'auth-token': jwt,
    },
  };
  axios
    .get('http://localhost:3002/api/expressions', config)
    .then((response) => {
      dispatch(getExpressions(response.data));
    });
}

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),
  garbageHandler: (expressionId) => dispatch(handleGarbageClick(expressionId)),
  getExpressions: (jwt) => {
    if (jwt) fetchExpressions(dispatch, jwt);
    else dispatch(getExpressions([]));
  },
});

//export default connect(mapStateToProps, mapDispatchToProps)(ExpressionsPanel);

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

  render() {
    return (
      <ExpressionsPanel
        expressions={this.props.expressions}
        clickHandler={this.props.clickHandler}
        garbageHandler={this.props.garbageHandler}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);
