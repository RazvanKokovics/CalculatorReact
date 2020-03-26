import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonContainer extends Component {
  static propTypes = {
    class: PropTypes.string,
    children: PropTypes.object,
  };

  render() {
    return (
      <div className={'grid-item ' + this.props.class}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonContainer;
