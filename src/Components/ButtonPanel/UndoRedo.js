import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUndo, FaRedo } from 'react-icons/fa';

import Button from 'Components/Button';
import ButtonContainer from 'Components/ButtonContainer';

class UndoRedo extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const cssClass = 'grid-item small-button btn grey1';
    return (
      <ButtonContainer class="two-button-container">
        <Button
          clickHandler={() => this.handleClick('Undo')}
          name="Undo"
          class={cssClass}
        >
          <FaUndo />
        </Button>
        <Button
          clickHandler={() => this.handleClick('Redo')}
          name="Redo"
          class={cssClass}
        >
          <FaRedo />
        </Button>
      </ButtonContainer>
    );
  }
}

export default UndoRedo;
