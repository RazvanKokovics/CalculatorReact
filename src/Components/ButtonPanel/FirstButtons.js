import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Condensed from 'Components/ButtonPanel/Condensed';
import Extended from 'Components/ButtonPanel/Extended';

class FirstButtons extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    extended: PropTypes.bool,
    buttonConfig: PropTypes.object,
  };

  render() {
    const { extended, clickHandler, buttonConfig } = this.props;

    if (!extended) {
      return (
        <Condensed
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.firstButtonsCondensed}
        />
      );
    } else {
      return (
        <Extended
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.firstButtonsExtended}
        />
      );
    }
  }
}

export default FirstButtons;
