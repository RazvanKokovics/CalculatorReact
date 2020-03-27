import React, { Component } from 'react';

import DisplayContainer from 'Components/DisplayContainer';
import 'Components/Calculator.css';
import Form from 'containers/Form';
import Display from 'containers/Display';
import History from 'containers/History';
import Expressions from 'containers/Expressions';
import ButtonPanel from 'containers/ButtonPanel';
import LoginPanel from 'containers/LoginPanel';

class Calculator extends Component {
  render() {
    return (
      <main className="calculator">
        <DisplayContainer>
          <LoginPanel />
        </DisplayContainer>
        <DisplayContainer>
          <History />
        </DisplayContainer>
        <DisplayContainer>
          <Display />
        </DisplayContainer>
        <ButtonPanel />
        <Expressions />
        <Form />
      </main>
    );
  }
}

export default Calculator;
