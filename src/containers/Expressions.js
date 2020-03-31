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
    jwt: PropTypes.string,
    getExpressions: PropTypes.func,
    addExpression: PropTypes.func,
  };

  componentDidMount() {
    const { jwt, getExpressions } = this.props;

    if (jwt) {
      getExpressions(jwt);
    }
  }

  componentDidUpdate(prevProps) {
    const { jwt } = this.props;
    const { expressions } = this.props;

    if (prevProps.jwt !== jwt && jwt) {
      this.props.getExpressions(jwt);
    }

    if (prevProps.expressions.length + 1 === expressions.length) {
      this.addLastExpression(expressions);
    }

    if (prevProps.expressions !== expressions) {
      this.updatePages();
    }
  }

  addLastExpression = (expressions) => {
    const { jwt, addExpression } = this.props;

    if (expressions.length > 0 && jwt) {
      addExpression(expressions[expressions.length - 1].e_value, jwt);
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
    const { jwt, garbageHandler } = this.props;

    garbageHandler(expressionId, jwt);
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
  expressions: state.calculation.expressions,
  jwt: state.userCredentials.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),
  garbageHandler: (expressionId, jwt) =>
    dispatch(removeExpression(expressionId, jwt)),
  getExpressions: (jwt) => dispatch(getExpressions(jwt)),
  addExpression: (expression, jwt) => dispatch(addExpression(expression, jwt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);
