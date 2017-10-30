import React from 'react';
import ReactDOM from 'react-dom';
import AnimateHeight from 'react-animate-height';
import Avatar from 'react-avatar';
import './Profiles.css'

//Avatar documentation at : https://www.npmjs.com/package/react-avatar
//AnimateHeight documentation at : https://www.npmjs.com/package/react-animate-height

var ProfilePictures = class extends React.Component{
    render() {
        var pictures = [];
        for (var i = 0; i < this.props.numPictures; i++) {
                pictures.push(
                    <Avatar size="200" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                );
            }
        
        return (
            <div className="pictures">{pictures}</div>
        );
    }
};

var Profiles = class extends React.Component {
    constructor() {
        super();

        this.state = {
            height: 0,
        };
        this.onToggleClick = this.onToggleClick.bind(this);
    }

    onToggleClick(){
        if (this.state.height == 'auto'){
            this.setState({ height: 0 });
        }
        else {
            this.setState({ height: 'auto' });
        }
           
    }

    render() {
        const {
        height,
        } = this.state;

        

        return (
            <div>
                <div className='buttons'>
                    <button className='btn btn-sm' onClick={this.onToggleClick}>
                        {this.props.title}
                    </button>
                </div>
                <AnimateHeight
                    height={height}
                    duration = { 500 }
                >
                    <div className='content'>
                        <ProfilePictures numPictures={this.props.numPictures} />
                    </div>
                </AnimateHeight>

            </div>
        );
    }
};

export default Profiles;



