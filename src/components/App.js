import React, { Component } from 'react';
import { Route, BrowserRouter, Router, Switch } from 'react-router-dom';
import Base from './Base.js';
import HomePage from './HomePage.js';

class App extends Component {
  render() {
    return (
      <div>
        <Base />
        <Switch>
          <Route exactly component={HomePage} pattern="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
