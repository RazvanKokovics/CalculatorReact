import React, { Component } from 'react';
import { FaTrashAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

import 'Components/ExpressionsPanel.css';

class ExpressionsPanel extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
    garbageClick: PropTypes.func,
    expressions: PropTypes.array,
    pageClick: PropTypes.func,
    previousPageClick: PropTypes.func,
    nextPageClick: PropTypes.func,
    numberOfPages: PropTypes.number,
  };

  render() {
    const {
      expressions,
      numberOfPages,
      previousPageClick,
      nextPageClick,
      pageClick,
      garbageClick,
      handleClick,
    } = this.props;

    const renderExpressions = expressions.map((expression) => {
      return (
        <div className="entry-container" key={expression.e_id}>
          <p onClick={handleClick(expression.e_value)} className="entry">
            {expression.e_value}
          </p>
          <div className="to-right" onClick={garbageClick(expression.e_id)}>
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
          onClick={pageClick}
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
            <div className="pagination-number" onClick={previousPageClick}>
              <FaAngleLeft />
            </div>
            {renderPageNumbers}
            <div
              className="pagination-number"
              onClick={nextPageClick(numberOfPages)}
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
