import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Statistics from 'Components/Statistic';
import {
  getUserRoleStatistic,
  getUserExpressionsStatistic,
  getExpressionUserStatistic,
} from 'actions';

class StatisticsContainer extends Component {
  static propTypes = {
    getUserRoles: PropTypes.func,
    getUserExpressions: PropTypes.func,
    getExpressionUser: PropTypes.func,
    userRoles: PropTypes.object,
    userExpressions: PropTypes.object,
    expressionUser: PropTypes.object,
  };

  componentDidMount() {
    const { getUserRoles, getUserExpressions, getExpressionUser } = this.props;

    getUserRoles();
    getUserExpressions();
    getExpressionUser();
  }

  render() {
    const { userRoles, userExpressions, expressionUser } = this.props;

    return (
      <Statistics
        userRoles={userRoles}
        userExpressions={userExpressions}
        expressionUser={expressionUser}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userRoles: state.statistic.userRoles,
  userExpressions: state.statistic.userExpressions,
  expressionUser: state.statistic.expressionUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserRoles: () => dispatch(getUserRoleStatistic()),
  getUserExpressions: () => dispatch(getUserExpressionsStatistic()),
  getExpressionUser: () => dispatch(getExpressionUserStatistic()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatisticsContainer);
