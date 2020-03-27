import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import ButtonContainer from 'Components/ButtonContainer';

class ClearChangeSignButtons extends Component {
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
          clickHandler={() => this.handleClick('AC')}
          name="AC"
          class={cssClass}
        ></Button>
        <Button
          clickHandler={() => this.handleClick('+/-')}
          name="+/-"
          class={cssClass}
        ></Button>
      </ButtonContainer>
    );
  }
}

export default ClearChangeSignButtons;
