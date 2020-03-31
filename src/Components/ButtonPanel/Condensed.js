import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'Components/ButtonPanel/condensed.css';
import Button from 'Components/Button';
import { firstButtonsCondensed } from 'Components/config';

class Condensed extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  render() {
    const { clickHandler } = this.props;

    return (
      <div className="condensed">
        {firstButtonsCondensed.map((button) => (
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
