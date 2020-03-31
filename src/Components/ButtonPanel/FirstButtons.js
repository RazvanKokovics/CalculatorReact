import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Condensed from 'Components/ButtonPanel/Condensed';
import Extended from 'Components/ButtonPanel/Extended';

class FirstButtons extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    extended: PropTypes.bool,
  };

  render() {
    const { extended, clickHandler } = this.props;

    if (!extended) {
      return <Condensed clickHandler={clickHandler} />;
    } else {
      return <Extended clickHandler={clickHandler} />;
    }
  }
}

export default FirstButtons;
