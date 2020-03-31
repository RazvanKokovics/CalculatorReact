import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

class FirstRow extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    buttonConfig: PropTypes.array,
    divClass: PropTypes.string,
  };

  render() {
    const { clickHandler, buttonConfig, divClass } = this.props;

    return (
      <div className={divClass}>
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

export default FirstRow;
