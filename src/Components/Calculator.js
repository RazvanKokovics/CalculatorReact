import React, { Component } from 'react';

import DisplayContainer from 'Components/DisplayContainer';
import 'Components/Calculator.css';
import ContainerForm from 'containers/ContainerForm';
import ContainerDisplay from 'containers/ContainerDisplay';
import ContainerHistory from 'containers/ContainerHistory';
import ContainerExpressions from 'containers/ContainerExpressions';
import ContainerButtonPanel from 'containers/ContainerButtonPanel';
import ContainerLoginPanel from 'containers/ContainerLoginPanel';

class Calculator extends Component {
  render() {
    return (
      <main className="calculator">
        <DisplayContainer>
          <ContainerLoginPanel />
        </DisplayContainer>
        <DisplayContainer>
          <ContainerHistory />
        </DisplayContainer>
        <DisplayContainer>
          <ContainerDisplay />
        </DisplayContainer>
        <ContainerButtonPanel />
        <ContainerExpressions />
        <ContainerForm />
      </main>
    );
  }
}

export default Calculator;
