import React, {Component} from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './Profiles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
            <ToolbarGroup>
              <a href="#team">team</a>
            </ToolbarGroup>
          </Toolbar>
        </AppBar>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div>
            <img src={logo}/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={logo}/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={logo}/>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <div className="main-body">
          <div className="bigblock" id="pod">
            asdlkjfas
          </div>
          <div className="bigblock" id="team">
            team
            <h1>Meet the Team</h1><br/>
            <Profiles numPictures={3} title="Mechanical Engineers"/>
            <Profiles numPictures={3} title="Electrical Engineers"/>
          </div>
          <div className="bigblock" id="sponsors">
            asdfdfs
          </div>
          <div className="bigblock" id="competition">
            asdfa
          </div>
          <div className="bigblock" id="supportUs">
            asdfasd
          </div>
        </div>
      </div>
    );
  }
}

export default App;
