import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/condensed.css';
import Button from 'Components/Button';

class Condensed extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    buttonConfig: PropTypes.array,
  };

  render() {
    const { clickHandler, buttonConfig } = this.props;

    return (
      <div className="condensed">
        {buttonConfig.map((button) => (
          <Button
            name={button.name}
            clickHandler={() => clickHandler(button.name)}
            key={button.id}
            class={'grid-item btn ' + button.style}
            value={button.value}
          />
        ))}
      </div>
    );
  }
}

export default Condensed;
