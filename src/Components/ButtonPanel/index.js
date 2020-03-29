import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/style.css';
import MainButtons from 'Components/ButtonPanel/MainButtons.js';
import FirstButtons from 'Components/ButtonPanel/FirstButtons';

class ButtonPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    extended: PropTypes.bool,
    enabledKeys: PropTypes.bool,
    keyPressed: PropTypes.func,
  };

  componentDidUpdate(prevProps) {
    const { enabledKeys } = this.props;

    if (prevProps.enabledKeys !== enabledKeys) {
      if (!this.props.enabledKeys) {
        document.addEventListener('keydown', this.props.keyPressed);
      } else {
        document.removeEventListener('keydown', this.props.keyPressed);
      }
    }
  }

  render() {
    const { extended, clickHandler } = this.props;
    console.log(extended);
    return (
      <div className="button-panel">
        <FirstButtons extended={extended} clickHandler={clickHandler} />
        <MainButtons clickHandler={clickHandler} />
      </div>
    );
  }
}

export default ButtonPanel;
