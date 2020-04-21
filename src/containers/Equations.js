import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Equations from 'Components/Equations';
import { getEquation, solveEquation } from 'actions';

class ContainerEquation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkResult = this.checkResult.bind(this);
  }

  static propTypes = {
    getRandomEquation: PropTypes.func,
    checkSolution: PropTypes.func,
    equationId: PropTypes.any,
    equation: PropTypes.string,
    message: PropTypes.string,
  };

  componentDidMount() {
    const { getRandomEquation } = this.props;

    getRandomEquation();
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  checkResult() {
    const { result } = this.state;
    const { checkSolution, equationId } = this.props;

    if (result) {
      checkSolution(equationId, result);
    }
  }

  getMessageInterpretation(message) {
    if (!message) {
      return undefined;
    }

    return message === 'The solution is correct.';
  }

  render() {
    const { equation, message, getRandomEquation } = this.props;
    const correct = this.getMessageInterpretation(message);

    return (
      <Equations
        equation={equation}
        handleChange={this.handleChange}
        checkResult={this.checkResult}
        message={message}
        getEquation={getRandomEquation}
        correct={correct}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  equation: state.equation.equation,
  equationId: state.equation.equationId,
  message: state.equation.message,
});

const mapDispatchToProps = (dispatch) => ({
  getRandomEquation: () => dispatch(getEquation()),
  checkSolution: (equationId, result) =>
    dispatch(solveEquation(equationId, result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerEquation);
