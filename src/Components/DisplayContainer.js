import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/DisplayContainer.css';

class DisplayContainer extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div className="grid-item grid-item-double-all input">
        {this.props.children}
      </div>
    );
  }
}

export default DisplayContainer;
