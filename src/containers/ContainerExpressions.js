import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpressionsPanel from 'Components/ExpressionsPanel';
import { handleExpressionClick, getExpressions } from 'actions';
import {
  fetchExpressions,
  deleteExpression,
  insertExpression,
} from 'service/queries';

class ContainerExpressionsPanel extends Component {
  constructor(props) {
    super(props);

    this.garbage = this.garbage.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.previousPageClick = this.previousPageClick.bind(this);
    this.nextPageClick = this.nextPageClick.bind(this);
  }

  state = {
    currentPage: 1,
    expressionsPerPage: 5,
    numberOfPages: 1,
  };

  static propTypes = {
    clickHandler: PropTypes.func,
    garbageHandler: PropTypes.func,
    expressions: PropTypes.array,
    jwt: PropTypes.string,
    getExpressions: PropTypes.func,
    addExpression: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.jwt) {
      this.props.getExpressions(this.props.jwt);
    }
  }

  componentDidUpdate(prevProps) {
    const { jwt } = this.props;
    const { expressions } = this.props;

    if (prevProps.jwt !== jwt) {
      this.props.getExpressions(jwt);
    }

    if (prevProps.expressions.length + 1 === expressions.length) {
      this.addLastExpression(expressions);
    }

    if (prevProps.expressions !== expressions) {
      console.log('Update');
      this.updatePages();
    }
  }

  addLastExpression = (expressions) => {
    const { jwt } = this.props;
    if (expressions.length > 0) {
      console.log('add');
      this.props.addExpression(
        expressions[expressions.length - 1].e_value,
        jwt,
      );
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
    console.log(numberOfPages);
    console.log(newCurrentPage);
    this.setState({
      ...this.state,
      numberOfPages,
      currentPage: newCurrentPage,
    });
  };

  garbage = (expressionId) => {
    this.props.garbageHandler(expressionId, this.props.jwt);
  };

  pageClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  previousPageClick() {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }

  nextPageClick(numberOfPages) {
    if (this.state.currentPage < numberOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  render() {
    const { expressionsPerPage, currentPage } = this.state;
    const { expressions } = this.props;
    const indexOfLastExpression = currentPage * expressionsPerPage;
    const indexOfFirstExpression = indexOfLastExpression - expressionsPerPage;

    const currentExpressions = expressions.slice(
      indexOfFirstExpression,
      indexOfLastExpression,
    );

    return (
      <ExpressionsPanel
        expressions={currentExpressions}
        clickHandler={this.props.clickHandler}
        garbageHandler={this.garbage}
        expressionsPerPage={this.state.expressionsPerPage}
        numberOfPages={this.state.numberOfPages}
        currentPage={this.state.currentPage}
        pageClick={this.pageClick}
        previousPageClick={this.previousPageClick}
        nextPageClick={this.nextPageClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  expressions: state.calculation.expressions,
  jwt: state.userCredentials.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (expression) => dispatch(handleExpressionClick(expression)),

  //need to rewrite
  garbageHandler: (expressionId, jwt) =>
    deleteExpression(dispatch, expressionId, jwt),
  getExpressions: (jwt) => {
    if (jwt) fetchExpressions(dispatch, jwt);
    else dispatch(getExpressions([]));
  },
  addExpression: (expression, jwt) => {
    if (jwt) insertExpression(dispatch, expression, jwt);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerExpressionsPanel);