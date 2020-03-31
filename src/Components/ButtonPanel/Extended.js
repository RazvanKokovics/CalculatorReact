import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/extended.css';
import Button from 'Components/Button';

class Extended extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    buttonConfig: PropTypes.array,
  };

  render() {
    const { clickHandler, buttonConfig } = this.props;

    return (
      <div className="extended">
        {buttonConfig.map((button) => (
          <Button
            name={button.name}
            clickHandler={() => clickHandler(button.name)}
            key={button.id}
            class={'grid-item btn small-button ' + button.style}
            value={button.value}
          />
        ))}
      </div>
    );
  }
}

export default Extended;
