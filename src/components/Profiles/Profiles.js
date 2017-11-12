import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AnimateHeight from 'react-animate-height';
import RaisedButton from 'material-ui/RaisedButton';
import Columns from 'react-columns'
import './Profiles.css'
import TeamMember from '../TeamMember/TeamMember.js'

//Avatar documentation at : https://www.npmjs.com/package/react-avatar
//AnimateHeight documentation at : https://www.npmjs.com/package/react-animate-height

class Profiles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: props.height
        }
    }

    // numPictures must be <= the size of picturesArray
    renderAllPictures(team) {
        if (!team) { return null}
        var pictures = [];
        for (var i = 0; i < team.members.length; i++) {
            pictures.push(
                <TeamMember key={i} name={team.members[i].name} image={team.members[i].image} role={team.members[i].role} />
            );
            }
        
        return (
            <div className="center">{pictures}</div>
        );
    }
    
    onToggleClick(){
        if (this.state.height === 'auto'){
            this.setState({ height: 0 });
        }
        else {
            this.setState({ height: 'auto' });
        }
           
    }

    render() {
        const {height} = this.state;

        return (
            <div>
                <RaisedButton label={this.props.title} primary={true} onClick={() => { this.onToggleClick(); }}  fullWidth={true} />

                <AnimateHeight
                    height={height}
                    duration = { 500 }
                >
                    <div className='content'>
                        <p>{this.props.team ? this.props.team.description : "asdf"}</p>
                        {this.renderAllPictures(this.props.team)}
                    </div>
                </AnimateHeight>

            </div>
        );
    }
};

Profiles.propTypes = {
    height: PropTypes.number,
    team: PropTypes.object,
    title: PropTypes.string
  };
  
Profiles.defaultProps = {
    height: 0,
    team: null,
    title: "Hello World"
}

export default Profiles;



