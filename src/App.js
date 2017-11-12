import React, {Component} from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './components/Profiles/Profiles'
import FlatButton from 'material-ui/FlatButton';
import StaggeredCard from './components/StaggeredCard/StaggeredCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar showMenuIconButton={false}>
          <Toolbar style={{width: "100%", backgroundColor: "inherit"}}>
            <img src={logo} className="App-logo" alt="logo" style={{maxWidth: "100px"}}/>
            <h5>UCSB Hyperloop</h5>
            <ToolbarGroup style={{backgroundColor: "inherit"}}>
              <a href="#team">
                <FlatButton label="Team" primary={true}>
                </FlatButton>
              </a>
            </ToolbarGroup>
          </Toolbar>
        </AppBar>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div>
            <img src="assets/ucsbhyp.jpg"/>
          </div>
          <div>
            <img src="assets/podAlone.jpg"/>
          </div>
          <div>
            <img src="assets/team2.jpg"/>
          </div>
        </Carousel>
        <div className="main-body">
          <div className="bigblock" id="pod">
 
            <StaggeredCard image="assets/cat.jpg" index="0" title="Section Title"
                        text="Lighter than dry pasta and deeply flavorful, fresh pasta isn't something to master in one go, but the end result is truly worthwhile. This particular recipe for an egg dough is vastly versatile. It can take on flavors from whole grain flours, saffron, herbs, or sauteed greens, or can be shaped into a number of different styles. And, with time and practice, what may have started as a cooking project may end up being the foundation for weeknight meals to come."
            />
            <StaggeredCard image="assets/cat.jpg" index="1" title="Section Title"
                text="Lighter than dry pasta and deeply flavorful, fresh pasta isn't something to master in one go, but the end result is truly worthwhile. This particular recipe for an egg dough is vastly versatile. It can take on flavors from whole grain flours, saffron, herbs, or sauteed greens, or can be shaped into a number of different styles. And, with time and practice, what may have started as a cooking project may end up being the foundation for weeknight meals to come."
            />
            <StaggeredCard image="assets/cat.jpg" index="0" title="Section Title"
                text="Lighter than dry pasta and deeply flavorful, fresh pasta isn't something to master in one go, but the end result is truly worthwhile. This particular recipe for an egg dough is vastly versatile. It can take on flavors from whole grain flours, saffron, herbs, or sauteed greens, or can be shaped into a number of different styles. And, with time and practice, what may have started as a cooking project may end up being the foundation for weeknight meals to come."
            />
          </div>
          <div className="bigblock" id="team">
            team
            <h1>Meet the Team</h1><br/>
            <Profiles numPictures={3} title="Mechanical Engineers"
                images={["assets/cat.jpg","assets/cat.jpg","assets/cat.jpg"]}
            />
            <Profiles numPictures={3} title="Electrical Engineers"
                images={["assets/cat.jpg", "assets/cat.jpg", "assets/cat.jpg"]}
            />
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
