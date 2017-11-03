import React, {Component} from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './components/Profiles/Profiles'
import StaggeredCard from './components/StaggeredCard/StaggeredCard'

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
            <img src="assets/logo.jpg"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/logo.jpg"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={logo}/>
            <p className="legend">Legend 3</p>
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
                names={["Cat1", "Cat2", "Cat3"]}
                roles={["cat1 role", "cat2 role", "cat3 role"]}
                description="Separable, decoupled differential equations which describe gravitational, electromagnetic, and scalar perturbations of nonrotating (Schwarzschild) and rotating (Kerr) black holes have recently become available. Fortuitously, many interesting astrophysical processes near black holes can accurately be studied with these perturbation equations. A number of such processes are here investigated (as well as some matters of principle in pure relativity): vibration of black holes, and the long wave-trains of gravitational waves which such vibrations may generate; the spectrum and intensity of gravitational radiation from a particle falling radially into a Schwarzschild hole; the physical significance of the Newman-Penrose conserved quantities, the result that they are never physically measurable and do not always exist; the time evolution of a rotating black hole immersed in a static scalar field, a quantitative calculation of the hole's spin-down and alignment; scalar-field calculations of superradiant wave scattering from a rotating black hole, and of the possibility of floating orbits; these are both wave processes which extract a hole's rotational energy"
            />
            <Profiles numPictures={3} title="Electrical Engineers"
                images={["assets/cat.jpg", "assets/cat.jpg", "assets/cat.jpg"]}
                names={["Cat4", "Cat5", "Cat6"]}
                roles={["cat4 role", "cat5 role", "cat6 role"]}
                description="Separable, decoupled differential equations which describe gravitational, electromagnetic, and scalar perturbations of nonrotating (Schwarzschild) and rotating (Kerr) black holes have recently become available. Fortuitously, many interesting astrophysical processes near black holes can accurately be studied with these perturbation equations. A number of such processes are here investigated (as well as some matters of principle in pure relativity): vibration of black holes, and the long wave-trains of gravitational waves which such vibrations may generate; the spectrum and intensity of gravitational radiation from a particle falling radially into a Schwarzschild hole; the physical significance of the Newman-Penrose conserved quantities, the result that they are never physically measurable and do not always exist; the time evolution of a rotating black hole immersed in a static scalar field, a quantitative calculation of the hole's spin-down and alignment; scalar-field calculations of superradiant wave scattering from a rotating black hole, and of the possibility of floating orbits; these are both wave processes which extract a hole's rotational energy"
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
