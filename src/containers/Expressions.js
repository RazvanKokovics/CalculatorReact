import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

import ExpressionsPanel from 'Components/ExpressionsPanel';
import 'Components/ExpressionsPanel.css';
import {
  handleExpressionClick,
  removeExpression,
  getExpressions,
  addExpression,
} from 'actions';

class ContainerExpressionsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      expressionsPerPage: 5,
      numberOfPages: 1,
    };

    this.garbage = this.garbage.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.previousPageClick = this.previousPageClick.bind(this);
    this.nextPageClick = this.nextPageClick.bind(this);
  }

  static propTypes = {
    clickHandler: PropTypes.func,
    garbageHandler: PropTypes.func,
    expressions: PropTypes.array,
    username: PropTypes.string,
    getExpressions: PropTypes.func,
    addExpression: PropTypes.func,
  };

  componentDidMount() {
    const { username, getExpressions } = this.props;

    if (username) {
      getExpressions();
    }
  }

  componentDidUpdate(prevProps) {
    const { username, expressions, getExpressions } = this.props;

    if (prevProps.username !== username && username) {
      getExpressions();
    }

    if (prevProps.expressions.length + 1 === expressions.length) {
      this.addLastExpression(expressions);
    }

    if (prevProps.expressions !== expressions) {
      this.updatePages();
    }
  }

  addLastExpression = (expressions) => {
    const { addExpression } = this.props;

    if (expressions.length > 0) {
      addExpression(expressions[expressions.length - 1].e_value);
    }
  };

  updatePages = () => {
    const { currentPage, expressionsPerPage } = this.state;
    const { expressions } = this.props;
    const numberOfPages = Math.ceil(expressions.length / expressionsPerPage);
    let newCurrentPage = currentPage;

    if (currentPage > numberOfPages) {
      newCurrentPage = numberOfPages;
    }

    this.setState({
      ...this.state,
      numberOfPages,
      currentPage: newCurrentPage,
    });
  };

  garbage = (expressionId) => {
    const { garbageHandler } = this.props;

    garbageHandler(expressionId);
  };

  pageClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  previousPageClick() {
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  nextPageClick() {
    const { currentPage, numberOfPages } = this.state;

    if (currentPage < numberOfPages) {
      this.setState({ currentPage: currentPage + 1 });
    }
  }

  render() {
    const { expressionsPerPage, currentPage, numberOfPages } = this.state;
    const { expressions, clickHandler } = this.props;
    const indexOfLastExpression = currentPage * expressionsPerPage;
    const indexOfFirstExpression = indexOfLastExpression - expressionsPerPage;

    const currentExpressions = expressions.slice(
      indexOfFirstExpression,
      indexOfLastExpression,
    );

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
          onClick={this.pageClick}
        >
          {number}
        </div>
      );
    });

    return (
      <div id="expressions-panel">
        <p id="title">Previous Expressions</p>
        <ExpressionsPanel
          expressions={currentExpressions}
          handleClick={clickHandler}
          garbageClick={this.garbage}
        />
        <div id="center">
          <div id="pagination">
            <div className="pagination-number" onClick={this.previousPageClick}>
              <FaAngleLeft />
            </div>
            {renderPageNumbers}
            <div className="pagination-number" onClick={this.nextPageClick}>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.userCredentials.username,
  expressions: state.calculation.expressions,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),
  garbageHandler: (expressionId) => dispatch(removeExpression(expressionId)),
  getExpressions: () => dispatch(getExpressions()),
  addExpression: (expression) => dispatch(addExpression(expression)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);
