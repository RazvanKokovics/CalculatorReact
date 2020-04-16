import React, { Component } from 'react';

import DisplayContainer from 'Components/DisplayContainer';
import 'Components/Calculator.css';
import Form from 'containers/Form';
import Display from 'containers/Display';
import History from 'containers/History';
import Expressions from 'containers/Expressions';
import ButtonPanel from 'containers/ButtonPanel';

class Calculator extends Component {
  render() {
    return (
      <div className="content">
        <div className="calculator">
          <DisplayContainer>
            <History />
          </DisplayContainer>
          <DisplayContainer>
            <Display />
          </DisplayContainer>
          <ButtonPanel />
          <Expressions />
          <Form />
        </div>
      </div>
    );
  }
}

export default Calculator;
