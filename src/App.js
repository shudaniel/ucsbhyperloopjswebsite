import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel>
            <div>
                <img src={logo} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={logo} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={logo} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
