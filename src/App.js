import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </Toolbar>
        </AppBar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
