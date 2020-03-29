import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/extended.css';
import Button from 'Components/Button';
import { firstButtonsExtended } from 'Components/ButtonPanel/config';

class Extended extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  render() {
    const { clickHandler } = this.props;
    return (
      <div className="extended">
        {firstButtonsExtended.map((button) => (
          <Button
            name={button.name}
            clickHandler={() => clickHandler(button.name)}
            key={button.id}
            class={'grid-item btn' + button.style}
            value={button.value}
          />
        ))}
      </div>
    );
  }
}

export default Extended;
