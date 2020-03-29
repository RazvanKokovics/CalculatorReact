import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import { buttons } from 'Components/ButtonPanel/config';

class MainButtons extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  render() {
    const { clickHandler } = this.props;
    return buttons.map((button) => (
      <Button
        name={button.name}
        clickHandler={() => clickHandler(button.name)}
        key={button.id}
        class={'grid-item btn ' + button.style}
      />
    ));
  }
}

export default MainButtons;
