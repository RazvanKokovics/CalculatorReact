import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './History.css';

class History extends Component {
  static propTypes = {
    value: PropTypes.string,
  };
  render() {
    return <div id="history">{this.props.value}</div>;
  }
}

export default History;
