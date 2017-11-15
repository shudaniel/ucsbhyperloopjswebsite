import React, {Component} from 'react';
import logo from './logo.svg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './components/Profiles/Profiles'
import StaggeredCard from './components/StaggeredCard/StaggeredCard'
import NavBar from './components/NavBar/NavBar'
import ImagesArray from './components/ImagesArray/ImagesArray'
import { Mechanical, Electrical, TEAM_IMAGES } from './constants';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
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
 
            <StaggeredCard image="assets/loop.png" index="0" title="The Hyperloop Competition"
                text="The Hyperloop Pod Competition is an incentive prize competition sponsored by SpaceX that is being held in 2015–2018 where a number of student and non-student teams are participating to design—and for some, build—a subscale prototype transport vehicle to demonstrate technical feasibility of various aspects of the Hyperloop concept. The competitions have been open to participants globally, although all competitions and judging has occurred in the United States."
            />
            <StaggeredCard image="assets/pod.jpg" index="1" title="Our Pod"
                text="Lighter than dry pasta and deeply flavorful, fresh pasta isn't something to master in one go, but the end result is truly worthwhile. This particular recipe for an egg dough is vastly versatile. It can take on flavors from whole grain flours, saffron, herbs, or sauteed greens, or can be shaped into a number of different styles. And, with time and practice, what may have started as a cooking project may end up being the foundation for weeknight meals to come."
            />
            <StaggeredCard image="assets/cat.jpg" index="0" title="Section Title"
                text="Lighter than dry pasta and deeply flavorful, fresh pasta isn't something to master in one go, but the end result is truly worthwhile. This particular recipe for an egg dough is vastly versatile. It can take on flavors from whole grain flours, saffron, herbs, or sauteed greens, or can be shaped into a number of different styles. And, with time and practice, what may have started as a cooking project may end up being the foundation for weeknight meals to come."
            />
          </div>
          <div className="bigblock" id="team">
            <h1>Meet the Team</h1><br/>
            <Profiles team={Mechanical} title="Mechanical Engineers"
            />
            <Profiles team={Electrical} title="Electrical Engineers"
            />
            
          </div>
          <div className="bigblock" id="sponsors">
            <h1>Our Sponsors</h1><br />
          </div>
          <div className="bigblock" id="supportUs">
            <h1>Support Us</h1><br />
          </div>
          <div className="bigblock" id="gallery">
            <h1>Gallery</h1><br/>
            <ImagesArray imagesArray={TEAM_IMAGES} numColumns={4} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
