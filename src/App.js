import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Calculator from 'Components/Calculator';
import NavigationBar from 'containers/Navbar';
import Statistics from 'containers/Statistics';
import Equations from 'containers/Equations';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Calculator} />
            <Route path="/equations" component={Equations} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
