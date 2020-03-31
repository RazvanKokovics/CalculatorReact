import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FirstRow from 'Components/ButtonPanel/FirstRow';

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
        <FirstRow
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.firstButtonsCondensed}
          divClass="condensed"
        />
      );
    } else {
      return (
        <FirstRow
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.firstButtonsExtended}
          divClass="extended"
        />
      );
    }
  }
}

export default FirstButtons;
