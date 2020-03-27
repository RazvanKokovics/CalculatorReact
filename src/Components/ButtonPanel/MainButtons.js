import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import { buttons } from 'Components/ButtonPanel/config';

class ButtonPanel extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return buttons.map((button) => (
      <Button
        name={button.name}
        clickHandler={() => this.handleClick(button.name)}
        key={button.id}
        class={'grid-item btn ' + button.style}
      />
    ));
  }
}

export default ButtonPanel;
