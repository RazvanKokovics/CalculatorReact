import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaArrowLeft, FaUndo, FaRedo } from 'react-icons/fa';

import 'Components/Button.css';

class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func,
    class: PropTypes.string,
    value: PropTypes.string,
  };

  components = {
    arrowRight: FaArrowRight,
    arrowLeft: FaArrowLeft,
    undo: FaUndo,
    redo: FaRedo,
  };

  render() {
    const { name, clickHandler, value } = this.props;
    const className = this.props.class;

    if (value) {
      const TagName = this.components[value];

      return (
        <button title={name} className={className} onClick={clickHandler}>
          <TagName />
        </button>
      );
    } else {
      return (
        <button title={name} className={className} onClick={clickHandler}>
          {name}
        </button>
      );
    }
  }
}
export default Button;
