import React, { Component } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

import 'Components/Statistic.css';

class Bar extends Component {
  static propTypes = {
    data: PropTypes.object,
    titleText: PropTypes.string,
    labelText: PropTypes.string,
  };

  chartRef = React.createRef();

  componentDidUpdate() {
    const myChartRef = this.chartRef.current.getContext('2d');
    const { data, titleText, labelText } = this.props;

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: labelText,
            backgroundColor: this.generateColors(Object.keys(data).length),
            hoverBorderWidth: ['5px'],
            data: Object.values(data),
            minBarLength: 2,
          },
        ],
      },
      options: {
        title: {
          display: true,
          fontSize: '18',
          position: 'bottom',
          text: titleText,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 1,
              },
            },
          ],
        },
      },
    });
  }

  generateColors(length) {
    let arr = [];

    while (arr.length < length) {
      arr.push('#fd9e2b', '#403f42');
    }

    return arr;
  }

  render() {
    return (
      <div className="chart-container">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default Bar;
