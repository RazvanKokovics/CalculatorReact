import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

class MainButtons extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    buttonConfig: PropTypes.array,
  };

  render() {
    const { clickHandler, buttonConfig } = this.props;

    return buttonConfig.map((button) => (
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
