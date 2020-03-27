import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import ButtonContainer from 'Components/ButtonContainer';
import { paranthesisOperators } from 'Components/ButtonPanel/config';

class Paranthesis extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const cssClass = 'grid-item small-button btn';
    return (
      <ButtonContainer class="four-button-container">
        {paranthesisOperators.map((button) => (
          <Button
            name={button.name}
            clickHandler={() => this.handleClick(button.name)}
            key={button.id}
            class={cssClass}
          />
        ))}
      </ButtonContainer>
    );
  }
}

export default Paranthesis;
