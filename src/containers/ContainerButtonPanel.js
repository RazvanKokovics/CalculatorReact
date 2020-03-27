import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonPanel from 'Components/ButtonPanel/index';
import { setDisplay, setExtended } from 'actions';

class ContainerButtonPanel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  static propTypes = {
    extendHandler: PropTypes.func,
    updateDisplay: PropTypes.func,
    extended: PropTypes.bool,
    enabledKeys: PropTypes.bool,
  };

  getKeyName(event) {
    const keyName = event.key;
    if ('+*()/-=0123456789'.includes(keyName)) {
      return keyName;
    }
    return null;
  }

  handleKey(event) {
    const { updateDisplay } = this.props;
    const keyName = this.getKeyName(event);
    if (keyName) {
      updateDisplay(keyName);
    }
  }

  clickHandler(buttonName) {
    const { extendHandler, updateDisplay } = this.props;
    if (buttonName === 'hide' || buttonName === 'show') {
      extendHandler();
    } else {
      updateDisplay(buttonName);
    }
  }

  render() {
    return (
      <ButtonPanel
        {...{
          extended: this.props.extended,
          enabledKeys: this.props.enabledKeys,
        }}
        keyPressed={this.handleKey}
        clickHandler={this.clickHandler}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  extended: state.extended,
  enabledKeys: state.userCredentials.username === '',
});

const mapDispatchToProps = (dispatch) => ({
  extendHandler: () => dispatch(setExtended()),
  updateDisplay: (keyName) => dispatch(setDisplay(keyName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerButtonPanel);
