import React, { Component } from 'react';
import { FaTrashAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

import 'Components/ExpressionsPanel.css';

class ExpressionsPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    garbageHandler: PropTypes.func,
    expressions: PropTypes.array,
    pageClick: PropTypes.func,
    previousPageClick: PropTypes.func,
    nextPageClick: PropTypes.func,
    numberOfPages: PropTypes.number,
  };

  handleClick = (expressionString) => {
    this.props.clickHandler(expressionString);
  };

  garbageClick = (expressionId) => {
    this.props.garbageHandler(expressionId);
  };

  pageClick = (event) => {
    this.props.pageClick(event);
  };

  previousPageClick() {
    this.props.previousPageClick();
  }

  nextPageClick(numberOfPages) {
    this.props.nextPageClick(numberOfPages);
  }

  render() {
    const { expressions, numberOfPages } = this.props;

    const renderExpressions = expressions.map((expression) => {
      return (
        <div className="entry-container" key={expression.e_id}>
          <p
            onClick={() => this.handleClick(expression.e_value)}
            className="entry"
          >
            {expression.e_value}
          </p>
          <div
            className="to-right"
            onClick={() => this.garbageClick(expression.e_id)}
          >
            <FaTrashAlt />
          </div>
        </div>
      );
    });

    // Page numbers
    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <div
          key={number}
          id={number}
          className="pagination-number"
          onClick={this.pageClick.bind(this)}
        >
          {number}
        </div>
      );
    });

    return (
      <div id="expressions-panel">
        <p id="title">Previous Expressions</p>
        {renderExpressions}
        <div id="center">
          <div id="pagination">
            <div
              className="pagination-number"
              onClick={this.previousPageClick.bind(this)}
            >
              <FaAngleLeft />
            </div>
            {renderPageNumbers}
            <div
              className="pagination-number"
              onClick={this.nextPageClick.bind(this, numberOfPages)}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExpressionsPanel;
