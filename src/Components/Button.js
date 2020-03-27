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

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <button
        title={this.props.name}
        className={this.props.class}
        onClick={this.props.clickHandler}
      >
        {this.props.children || this.props.name}
      </button>
    );
  }
}
export default Button;
