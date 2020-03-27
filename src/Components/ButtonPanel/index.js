import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaArrowLeft, FaUndo, FaRedo } from 'react-icons/fa';

import 'Components/ButtonPanel/ButtonPanel.css';
import Button from 'Components/Button';
import ButtonContainer from 'Components/ButtonContainer';
import { firstButtonsSimple } from 'Components/ButtonPanel/config';
import MainButtons from 'Components/ButtonPanel/MainButtons.js';

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
          {firstButtonsSimple.map((button) => (
            <Button
              name={button.name}
              clickHandler={() => this.handleClick(button.name)}
              key={button.id}
              class={'grid-item btn ' + button.style}
            />
          ))}
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
          <ButtonContainer class="two-button-container">
            <Button
              clickHandler={() => this.handleClick('Undo')}
              name="Undo"
              class="grid-item small-button btn grey1"
            >
              <FaUndo />
            </Button>
            <Button
              clickHandler={() => this.handleClick('Redo')}
              name="Redo"
              class="grid-item small-button btn grey1"
            >
              <FaRedo />
            </Button>
          </ButtonContainer>
          <ButtonContainer class="two-button-container">
            <Button
              clickHandler={() => this.handleClick('AC')}
              name="AC"
              class="grid-item small-button btn grey1"
            ></Button>
            <Button
              clickHandler={() => this.handleClick('+/-')}
              name="+/-"
              class="grid-item small-button btn grey1"
            ></Button>
          </ButtonContainer>
          <ButtonContainer class="four-button-container">
            <Button
              clickHandler={() => this.handleClick('(')}
              name="("
              class="grid-item small-button btn"
            ></Button>
            <Button
              clickHandler={() => this.handleClick(')')}
              name=")"
              class="grid-item small-button btn"
            ></Button>
            <Button
              clickHandler={() => this.handleClick('%')}
              name="%"
              class="grid-item small-button btn"
            ></Button>
            <Button
              clickHandler={() => this.handleClick('/')}
              name="/"
              class="grid-item small-button btn"
            ></Button>
          </ButtonContainer>
          <MainButtons clickHandler={this.handleClick} />
        </div>
      );
    }
  }
}

export default ButtonPanel;
