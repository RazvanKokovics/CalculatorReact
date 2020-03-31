import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/style.css';
import MainButtons from 'Components/ButtonPanel/MainButtons.js';
import FirstButtons from 'Components/ButtonPanel/FirstButtons';

class ButtonPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    extended: PropTypes.bool,
    buttonConfig: PropTypes.object,
  };

  render() {
    const { extended, clickHandler, buttonConfig } = this.props;
    return (
      <div className="button-panel">
        <FirstButtons
          extended={extended}
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.firstRow}
        />
        <MainButtons
          clickHandler={clickHandler}
          buttonConfig={buttonConfig.buttons}
        />
      </div>
    );
  }
}

export default ButtonPanel;
