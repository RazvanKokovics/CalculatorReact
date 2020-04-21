import React, { Component } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

import 'Components/Statistic.css';

class Pie extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  chartRef = React.createRef();

  componentDidUpdate() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { data } = this.props;

    new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            backgroundColor: ['#403f42', '#fd9e2b'],
            hoverBorderWidth: ['5px'],
            data: Object.values(data),
          },
        ],
      },
      options: {
        title: {
          display: true,
          fontSize: '18',
          position: 'bottom',
          text: 'Regular Users and Admins',
        },
      },
    });
  }

  render() {
    return (
      <div className="chart-container">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default Pie;
