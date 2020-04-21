import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import PieChart from 'Components/Charts/PieChart';
import BarChart from 'Components/Charts/BarChart.js';
import 'Components/Statistic.css';

class Statistics extends Component {
  static propTypes = {
    userRoles: PropTypes.object,
    userExpressions: PropTypes.object,
    expressionUser: PropTypes.object,
  };

  render() {
    const { userRoles, userExpressions, expressionUser } = this.props;

    return (
      <div className="content">
        <div className="statistic-content">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={8}>
              <PieChart data={userRoles} />
            </Grid>
            <Grid item xs={6}>
              <BarChart
                data={expressionUser}
                titleText="User count by expression"
                labelText="Users"
              />
            </Grid>
            <Grid item xs={6}>
              <BarChart
                data={userExpressions}
                titleText="Expression count by user"
                labelText="Expressions"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Statistics;
