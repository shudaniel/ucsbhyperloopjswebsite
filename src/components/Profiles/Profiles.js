import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import AnimateHeight from 'react-animate-height';
import Avatar from 'react-avatar';
import RaisedButton from 'material-ui/RaisedButton';
import './Profiles.css'

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
    renderPictures(numPictures, picturesArray) {
        var pictures = [];
        for (var i = 0; i < numPictures; i++) {
                pictures.push(
                    <Avatar className="profilePic" size={200} key={i} round={true} name="Test Name" src={picturesArray[i]} />
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
                        {this.renderPictures(this.props.numPictures, this.props.images)}
                    </div>
                </AnimateHeight>

            </div>
        );
    }
};

Profiles.propTypes = {
    height: PropTypes.number,
    numPictures: PropTypes.number,
    title: PropTypes.string
  };
  
Profiles.defaultProps = {
    height: 0,
    numPictures: 1,
    title: "Hello World"
}

export default Profiles;



