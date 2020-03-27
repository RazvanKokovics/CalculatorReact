import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import 'Components/ButtonPanel/ButtonPanel.css';
import Button from 'Components/Button';
import MainButtons from 'Components/ButtonPanel/MainButtons.js';
import UndoRedo from 'Components/ButtonPanel/UndoRedo';
import ClearChangeSign from 'Components/ButtonPanel/ClearChangeSign';
import Paranthesis from 'Components/ButtonPanel/Paranthesis';
import InitialButtons from 'Components/ButtonPanel/InitialButtons';

class ButtonPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    extended: PropTypes.bool,
    enabledKeys: PropTypes.bool,
    keyPressed: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
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
    const { extended } = this.props;

    if (!extended) {
      return (
        <div className="button-panel">
          <Button
            clickHandler={() => this.handleClick('show')}
            name=""
            key="50"
            class="grid-item btn grey1"
          >
            <FaArrowRight />
          </Button>
          <InitialButtons clickHandler={this.handleClick} />
          <MainButtons clickHandler={this.handleClick} />
        </div>
      );
    } else {
      return (
        <div className="button-panel">
          <Button
            clickHandler={() => this.handleClick('hide')}
            name=""
            key="50"
            class="grid-item btn grey1"
          >
            <FaArrowLeft />
          </Button>

          <UndoRedo clickHandler={this.handleClick} />
          <ClearChangeSign clickHandler={this.handleClick} />
          <Paranthesis clickHandler={this.handleClick} />
          <MainButtons clickHandler={this.handleClick} />
        </div>
      );
    }
  }
}

export default ButtonPanel;
