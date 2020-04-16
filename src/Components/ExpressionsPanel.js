import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import 'Components/ExpressionsPanel.css';

class ExpressionsPanel extends Component {
  static propTypes = {
    handleClick: PropTypes.func,
    garbageClick: PropTypes.func,
    expressions: PropTypes.array,
  };

  render() {
    const { expressions, garbageClick, handleClick } = this.props;

    const renderExpressions = expressions.map((expression) => {
      return (
        <div className="entry-container" key={expression.id}>
          <p onClick={() => handleClick(expression.value)} className="entry">
            {expression.value}
          </p>
          <div className="to-right" onClick={() => garbageClick(expression.id)}>
            <FaTrashAlt />
          </div>
        </div>
      );
    });

    return renderExpressions;
  }
}
export default ExpressionsPanel;
