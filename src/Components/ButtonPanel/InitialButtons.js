import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import { firstButtonsSimple } from 'Components/ButtonPanel/config';

class InitialButtons extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return firstButtonsSimple.map((button) => (
      <Button
        name={button.name}
        clickHandler={() => this.handleClick(button.name)}
        key={button.id}
        class={'grid-item btn ' + button.style}
      />
    ));
  }
}

export default InitialButtons;
