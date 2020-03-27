import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/Button.css';

class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func,
    class: PropTypes.string,
    children: PropTypes.object,
  };

  render() {
    const { name, clickHandler, children } = this.props;
    const className = this.props.class;

    return (
      <button title={name} className={className} onClick={clickHandler}>
        {children || name}
      </button>
    );
  }
}
export default Button;
